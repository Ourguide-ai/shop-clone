import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Question from "@/lib/db/models/Question";
import { getAuthUser } from "@/lib/auth";
import { requireRole, isResponse } from "@/lib/rbac";

export async function GET(request: NextRequest) {
  try {
    const productId = request.nextUrl.searchParams.get("productId");
    if (!productId) {
      return NextResponse.json({ error: "productId is required" }, { status: 400 });
    }

    await dbConnect();

    const questions = await Question.find({ productId: Number(productId) })
      .sort({ upvoteCount: -1, createdAt: -1 })
      .lean();

    // Check if current user has upvoted (optional - works for unauthenticated too)
    const user = await getAuthUser(request);
    const userId = user?._id?.toString();

    const mapped = questions.map((q) => ({
      id: q._id.toString(),
      productId: q.productId,
      askerName: q.askerName,
      questionText: q.questionText,
      answers: q.answers.map((a) => ({
        id: a._id?.toString() || "",
        answererName: a.answererName,
        answerText: a.answerText,
        createdAt: a.createdAt?.toISOString() || "",
      })),
      upvoteCount: q.upvoteCount,
      hasUpvoted: userId ? q.upvoters.some((id) => id.toString() === userId) : false,
      createdAt: q.createdAt?.toISOString() || "",
    }));

    return NextResponse.json({ questions: mapped });
  } catch (error) {
    console.error("Get questions error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const result = await requireRole(request, ["buyer", "admin"]);
    if (isResponse(result)) return result;
    const { user } = result;

    const { productId, questionText } = await request.json();

    if (!productId || !questionText?.trim()) {
      return NextResponse.json(
        { error: "productId and questionText are required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const question = await Question.create({
      productId: Number(productId),
      askerId: user._id,
      askerName: user.name,
      questionText: questionText.trim(),
    });

    return NextResponse.json(
      {
        question: {
          id: question._id.toString(),
          productId: question.productId,
          askerName: question.askerName,
          questionText: question.questionText,
          answers: [],
          upvoteCount: 0,
          hasUpvoted: false,
          createdAt: question.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create question error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
