import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import PriceMatchRequest from "@/lib/db/models/PriceMatchRequest";
import Product from "@/lib/db/models/Product";
import { getAuthUser } from "@/lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (user.role !== "buyer" && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await dbConnect();

    const isAdmin = user.role === "admin";
    const statusFilter = request.nextUrl.searchParams.get("status");

    const filter: Record<string, unknown> = isAdmin ? {} : { userId: user._id };
    if (statusFilter) filter.status = statusFilter;

    const requests = await PriceMatchRequest.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    const mapped = requests.map((r) => ({
      id: r._id.toString(),
      productId: r.productId,
      productTitle: r.productTitle,
      competitorName: r.competitorName,
      competitorUrl: r.competitorUrl,
      competitorPrice: r.competitorPrice,
      screenshotUrl: r.screenshotUrl || "",
      email: r.email,
      notes: r.notes || "",
      status: r.status,
      adminNotes: r.adminNotes || "",
      createdAt: r.createdAt?.toISOString() || "",
    }));

    return NextResponse.json({ requests: mapped });
  } catch (error) {
    console.error("Get price match error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (user.role !== "buyer" && user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const formData = await request.formData();
    const productId = Number(formData.get("productId"));
    const competitorName = formData.get("competitorName") as string;
    const competitorUrl = formData.get("competitorUrl") as string;
    const competitorPrice = Number(formData.get("competitorPrice"));
    const email = formData.get("email") as string;
    const notes = (formData.get("notes") as string) || "";

    if (!productId || !competitorName || !competitorUrl || !competitorPrice || !email) {
      return NextResponse.json({ error: "All required fields must be provided" }, { status: 400 });
    }

    // Validate URL format
    try {
      new URL(competitorUrl);
    } catch {
      return NextResponse.json({ error: "Invalid competitor URL format" }, { status: 400 });
    }

    await dbConnect();

    // Check product exists and competitor price is lower
    const product = await Product.findOne({ productId }).lean();
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (competitorPrice >= product.price) {
      return NextResponse.json(
        { error: "Competitor price must be lower than our current price" },
        { status: 400 }
      );
    }

    // Upload screenshot if provided
    let screenshotUrl = "";
    const screenshot = formData.get("screenshot");
    if (screenshot instanceof File && screenshot.size > 0) {
      const buffer = Buffer.from(await screenshot.arrayBuffer());
      const result = await uploadToCloudinary(buffer, "price-match");
      screenshotUrl = result.url;
    }

    const pmRequest = await PriceMatchRequest.create({
      userId: user._id,
      productId,
      productTitle: product.title,
      competitorName,
      competitorUrl,
      competitorPrice,
      screenshotUrl,
      email,
      notes,
    });

    return NextResponse.json(
      {
        request: {
          id: pmRequest._id.toString(),
          productId: pmRequest.productId,
          productTitle: pmRequest.productTitle,
          competitorName: pmRequest.competitorName,
          competitorUrl: pmRequest.competitorUrl,
          competitorPrice: pmRequest.competitorPrice,
          screenshotUrl: pmRequest.screenshotUrl || "",
          email: pmRequest.email,
          notes: pmRequest.notes || "",
          status: pmRequest.status,
          adminNotes: "",
          createdAt: pmRequest.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create price match error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
