import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IAnswer {
  _id?: Types.ObjectId;
  answererId: Types.ObjectId;
  answererName: string;
  answerText: string;
  createdAt: Date;
}

export interface IQuestion extends Document {
  productId: number;
  askerId: Types.ObjectId;
  askerName: string;
  questionText: string;
  answers: IAnswer[];
  upvoters: Types.ObjectId[];
  upvoteCount: number;
  createdAt: Date;
}

const AnswerSchema = new Schema<IAnswer>(
  {
    answererId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    answererName: { type: String, required: true },
    answerText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: true }
);

const QuestionSchema = new Schema<IQuestion>(
  {
    productId: { type: Number, required: true, index: true },
    askerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    askerName: { type: String, required: true },
    questionText: { type: String, required: true },
    answers: { type: [AnswerSchema], default: [] },
    upvoters: { type: [Schema.Types.ObjectId], default: [] },
    upvoteCount: { type: Number, default: 0 },
  },
  { collection: "questions", timestamps: true }
);

const Question: Model<IQuestion> =
  mongoose.models.Question || mongoose.model<IQuestion>("Question", QuestionSchema);

export default Question;
