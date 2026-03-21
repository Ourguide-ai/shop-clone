import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Question from "@/lib/db/models/Question";
import { requireRole, isResponse } from "@/lib/rbac";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await requireRole(request, ["seller", "admin"]);
    if (isResponse(result)) return result;
    const { user } = result;

    const { answerText } = await request.json();

    if (!answerText?.trim()) {
      return NextResponse.json({ error: "answerText is required" }, { status: 400 });
    }

    await dbConnect();

    const question = await Question.findById(params.id);
    if (!question) {
      return NextResponse.json({ error: "Question not found" }, { status: 404 });
    }

    question.answers.push({
      answererId: user._id,
      answererName: user.name,
      answerText: answerText.trim(),
      createdAt: new Date(),
    });

    await question.save();

    return NextResponse.json({
      question: {
        id: question._id.toString(),
        productId: question.productId,
        askerName: question.askerName,
        questionText: question.questionText,
        answers: question.answers.map((a) => ({
          id: a._id?.toString() || "",
          answererName: a.answererName,
          answerText: a.answerText,
          createdAt: a.createdAt?.toISOString() || "",
        })),
        upvoteCount: question.upvoteCount,
        hasUpvoted: false,
        createdAt: question.createdAt.toISOString(),
      },
    });
  } catch (error) {
    console.error("Answer question error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
