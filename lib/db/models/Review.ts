import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IReview extends Document {
  productId: number;
  userId: Types.ObjectId;
  userName: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

const ReviewSchema = new Schema<IReview>({
  productId: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: String, required: true },
}, { collection: "reviews" });

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
