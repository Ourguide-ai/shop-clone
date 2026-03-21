import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import IssueReport from "@/lib/db/models/IssueReport";
import { getAuthUser } from "@/lib/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    await dbConnect();

    const report = await IssueReport.findById(params.id).lean();
    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    // Only allow owner or admin
    if (user.role !== "admin" && report.userId.toString() !== user._id.toString()) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json({
      report: {
        id: report._id.toString(),
        orderId: report.orderId,
        items: report.items,
        issueType: report.issueType,
        description: report.description,
        evidenceUrls: report.evidenceUrls,
        resolutionPreference: report.resolutionPreference,
        status: report.status,
        adminNotes: report.adminNotes || "",
        createdAt: report.createdAt?.toISOString() || "",
      },
    });
  } catch (error) {
    console.error("Get issue error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { status, adminNotes } = await request.json();

    const validStatuses = ["submitted", "under_review", "resolved", "rejected"];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await dbConnect();

    const report = await IssueReport.findById(params.id);
    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    if (status) report.status = status;
    if (adminNotes !== undefined) report.adminNotes = adminNotes;
    if (status === "resolved") report.resolvedAt = new Date();

    await report.save();

    return NextResponse.json({
      report: {
        id: report._id.toString(),
        orderId: report.orderId,
        items: report.items,
        issueType: report.issueType,
        description: report.description,
        evidenceUrls: report.evidenceUrls,
        resolutionPreference: report.resolutionPreference,
        status: report.status,
        adminNotes: report.adminNotes || "",
        createdAt: report.createdAt?.toISOString() || "",
      },
    });
  } catch (error) {
    console.error("Update issue error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
