import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import { getAuthUser } from "@/lib/auth";
import RepairRequest from "@/lib/db/models/RepairRequest";
import Order from "@/lib/db/models/Order";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(request: NextRequest) {
  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();

    const orderId = formData.get("orderId") as string;
    const productId = Number(formData.get("productId"));
    const phoneNumber = formData.get("phoneNumber") as string;
    const defectDescription = formData.get("defectDescription") as string;
    const availabilitySlotsRaw = formData.get("availabilitySlots") as string;
    const warrantySlipFile = formData.get("warrantySlip") as File | null;

    if (!orderId || !productId || !phoneNumber || !defectDescription || !availabilitySlotsRaw) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!warrantySlipFile || warrantySlipFile.size === 0) {
      return NextResponse.json(
        { error: "Warranty slip is required" },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];
    if (!allowedTypes.includes(warrantySlipFile.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPG, PNG, WebP, PDF" },
        { status: 400 }
      );
    }

    if (warrantySlipFile.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be less than 10MB" },
        { status: 400 }
      );
    }

    let availabilitySlots;
    try {
      availabilitySlots = JSON.parse(availabilitySlotsRaw);
    } catch {
      return NextResponse.json(
        { error: "Invalid availability slots format" },
        { status: 400 }
      );
    }

    if (!Array.isArray(availabilitySlots) || availabilitySlots.length === 0) {
      return NextResponse.json(
        { error: "At least one availability slot is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Verify the order belongs to this user and contains the product
    const order = await Order.findOne({
      orderId,
      userId: user._id,
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const orderItem = order.items.find((item) => item.product.id === productId);
    if (!orderItem) {
      return NextResponse.json(
        { error: "Product not found in this order" },
        { status: 404 }
      );
    }

    // Check if order is delivered
    if (order.status !== "delivered") {
      return NextResponse.json(
        { error: "Repair can only be requested for delivered orders" },
        { status: 400 }
      );
    }

    // Check for existing pending/scheduled repair for same order+product
    const existingRepair = await RepairRequest.findOne({
      userId: user._id,
      orderId,
      productId,
      status: { $in: ["pending", "scheduled", "in_progress"] },
    });

    if (existingRepair) {
      return NextResponse.json(
        { error: "An active repair request already exists for this product" },
        { status: 409 }
      );
    }

    // Upload warranty slip to Cloudinary
    const fileBuffer = Buffer.from(await warrantySlipFile.arrayBuffer());
    const uploadResult = await uploadToCloudinary(fileBuffer);

    // Pick the first availability slot as the scheduled date/time
    const scheduled = availabilitySlots[0];

    const repairRequest = await RepairRequest.create({
      userId: user._id,
      orderId,
      productId,
      productTitle: orderItem.product.title,
      productImage: orderItem.product.image,
      phoneNumber,
      defectDescription,
      availabilitySlots,
      warrantySlipUrl: uploadResult.url,
      scheduledDate: scheduled.date,
      scheduledTime: scheduled.startTime,
      status: "scheduled",
    });

    return NextResponse.json({
      id: repairRequest._id.toString(),
      orderId: repairRequest.orderId,
      productId: repairRequest.productId,
      productTitle: repairRequest.productTitle,
      productImage: repairRequest.productImage,
      phoneNumber: repairRequest.phoneNumber,
      defectDescription: repairRequest.defectDescription,
      availabilitySlots: repairRequest.availabilitySlots,
      warrantySlipUrl: repairRequest.warrantySlipUrl,
      scheduledDate: repairRequest.scheduledDate,
      scheduledTime: repairRequest.scheduledTime,
      status: repairRequest.status,
      createdAt: repairRequest.createdAt.toISOString(),
    }, { status: 201 });
  } catch (error) {
    console.error("Repair request error:", error);
    return NextResponse.json(
      { error: "Failed to create repair request" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const repairs = await RepairRequest.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .lean();

    const result = repairs.map((r) => ({
      id: r._id.toString(),
      orderId: r.orderId,
      productId: r.productId,
      productTitle: r.productTitle,
      productImage: r.productImage,
      phoneNumber: r.phoneNumber,
      defectDescription: r.defectDescription,
      availabilitySlots: r.availabilitySlots,
      warrantySlipUrl: r.warrantySlipUrl,
      scheduledDate: r.scheduledDate,
      scheduledTime: r.scheduledTime,
      status: r.status,
      createdAt: r.createdAt.toISOString(),
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Fetch repairs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch repair requests" },
      { status: 500 }
    );
  }
}
