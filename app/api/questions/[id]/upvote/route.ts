import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Question from "@/lib/db/models/Question";
import { requireRole, isResponse } from "@/lib/rbac";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await requireRole(request, ["buyer", "admin"]);
    if (isResponse(result)) return result;
    const { user } = result;

    await dbConnect();

    const question = await Question.findById(params.id);
    if (!question) {
      return NextResponse.json({ error: "Question not found" }, { status: 404 });
    }

    const userId = user._id;
    const alreadyUpvoted = question.upvoters.some(
      (id) => id.toString() === userId.toString()
    );

    if (alreadyUpvoted) {
      question.upvoters = question.upvoters.filter(
        (id) => id.toString() !== userId.toString()
      ) as typeof question.upvoters;
      question.upvoteCount = Math.max(0, question.upvoteCount - 1);
    } else {
      question.upvoters.push(userId);
      question.upvoteCount = question.upvoteCount + 1;
    }

    await question.save();

    return NextResponse.json({
      upvoteCount: question.upvoteCount,
      hasUpvoted: !alreadyUpvoted,
    });
  } catch (error) {
    console.error("Upvote error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
