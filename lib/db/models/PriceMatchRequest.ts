import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IPriceMatchRequest extends Document {
  userId: Types.ObjectId;
  productId: number;
  productTitle: string;
  competitorName: string;
  competitorUrl: string;
  competitorPrice: number;
  screenshotUrl: string;
  email: string;
  notes: string;
  status: "pending" | "approved" | "rejected";
  adminNotes: string;
  reviewedBy?: Types.ObjectId;
  reviewedAt?: Date;
  createdAt: Date;
}

const PriceMatchRequestSchema = new Schema<IPriceMatchRequest>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: Number, required: true },
    productTitle: { type: String, required: true },
    competitorName: { type: String, required: true },
    competitorUrl: { type: String, required: true },
    competitorPrice: { type: Number, required: true },
    screenshotUrl: { type: String, default: "" },
    email: { type: String, required: true },
    notes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    adminNotes: { type: String, default: "" },
    reviewedBy: { type: Schema.Types.ObjectId, ref: "User" },
    reviewedAt: { type: Date },
  },
  { collection: "price_match_requests", timestamps: true }
);

const PriceMatchRequest: Model<IPriceMatchRequest> =
  mongoose.models.PriceMatchRequest ||
  mongoose.model<IPriceMatchRequest>("PriceMatchRequest", PriceMatchRequestSchema);

export default PriceMatchRequest;
