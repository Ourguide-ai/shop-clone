import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import PriceMatchRequest from "@/lib/db/models/PriceMatchRequest";
import { getAuthUser } from "@/lib/auth";

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

    if (status && !["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    await dbConnect();

    const pmRequest = await PriceMatchRequest.findById(params.id);
    if (!pmRequest) {
      return NextResponse.json({ error: "Request not found" }, { status: 404 });
    }

    if (status) pmRequest.status = status;
    if (adminNotes !== undefined) pmRequest.adminNotes = adminNotes;
    if (status === "approved" || status === "rejected") {
      pmRequest.reviewedBy = user._id;
      pmRequest.reviewedAt = new Date();
    }

    await pmRequest.save();

    return NextResponse.json({
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
        adminNotes: pmRequest.adminNotes || "",
        createdAt: pmRequest.createdAt?.toISOString() || "",
      },
    });
  } catch (error) {
    console.error("Update price match error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
