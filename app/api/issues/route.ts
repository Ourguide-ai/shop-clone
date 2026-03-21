import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import IssueReport from "@/lib/db/models/IssueReport";
import Order from "@/lib/db/models/Order";
import { getAuthUser } from "@/lib/auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();

    const isAdmin = user.role === "admin";
    const statusFilter = request.nextUrl.searchParams.get("status");

    const filter: Record<string, unknown> = isAdmin ? {} : { userId: user._id };
    if (statusFilter) filter.status = statusFilter;

    const reports = await IssueReport.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    const mapped = reports.map((r) => ({
      id: r._id.toString(),
      orderId: r.orderId,
      items: r.items,
      issueType: r.issueType,
      description: r.description,
      evidenceUrls: r.evidenceUrls,
      resolutionPreference: r.resolutionPreference,
      status: r.status,
      adminNotes: r.adminNotes || "",
      createdAt: r.createdAt?.toISOString() || "",
    }));

    return NextResponse.json({ reports: mapped });
  } catch (error) {
    console.error("Get issues error:", error);
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
    const orderId = formData.get("orderId") as string;
    const itemsJson = formData.get("items") as string;
    const issueType = formData.get("issueType") as string;
    const description = formData.get("description") as string;
    const resolutionPreference = formData.get("resolutionPreference") as string;

    if (!orderId || !itemsJson || !issueType || !description || !resolutionPreference) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const items = JSON.parse(itemsJson);

    await dbConnect();

    // Verify order belongs to user and is delivered
    const orderFilter = user.role === "admin"
      ? { orderId }
      : { orderId, userId: user._id };
    const order = await Order.findOne(orderFilter);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (order.status !== "delivered") {
      return NextResponse.json(
        { error: "Issues can only be reported for delivered orders" },
        { status: 400 }
      );
    }

    // Upload evidence files
    const evidenceUrls: string[] = [];
    const files = formData.getAll("evidence");
    for (const file of files) {
      if (file instanceof File && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const result = await uploadToCloudinary(buffer, "issue-reports");
        evidenceUrls.push(result.url);
      }
    }

    const report = await IssueReport.create({
      userId: user._id,
      orderId,
      items,
      issueType,
      description,
      evidenceUrls,
      resolutionPreference,
    });

    return NextResponse.json(
      {
        report: {
          id: report._id.toString(),
          orderId: report.orderId,
          items: report.items,
          issueType: report.issueType,
          description: report.description,
          evidenceUrls: report.evidenceUrls,
          resolutionPreference: report.resolutionPreference,
          status: report.status,
          adminNotes: "",
          createdAt: report.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create issue error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
