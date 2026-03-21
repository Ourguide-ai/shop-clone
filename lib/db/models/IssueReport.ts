import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IIssueItem {
  productId: number;
  productTitle: string;
  productImage: string;
}

export type IssueType = "damaged" | "wrong_item" | "missing_parts" | "defective" | "not_as_described";
export type ResolutionPreference = "refund" | "replacement" | "repair" | "store_credit";
export type IssueStatus = "submitted" | "under_review" | "resolved" | "rejected";

export interface IIssueReport extends Document {
  userId: Types.ObjectId;
  orderId: string;
  items: IIssueItem[];
  issueType: IssueType;
  description: string;
  evidenceUrls: string[];
  resolutionPreference: ResolutionPreference;
  status: IssueStatus;
  adminNotes?: string;
  resolvedAt?: Date;
  createdAt: Date;
}

const IssueItemSchema = new Schema<IIssueItem>(
  {
    productId: { type: Number, required: true },
    productTitle: { type: String, required: true },
    productImage: { type: String, required: true },
  },
  { _id: false }
);

const IssueReportSchema = new Schema<IIssueReport>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: String, required: true },
    items: { type: [IssueItemSchema], required: true },
    issueType: {
      type: String,
      enum: ["damaged", "wrong_item", "missing_parts", "defective", "not_as_described"],
      required: true,
    },
    description: { type: String, required: true },
    evidenceUrls: { type: [String], default: [] },
    resolutionPreference: {
      type: String,
      enum: ["refund", "replacement", "repair", "store_credit"],
      required: true,
    },
    status: {
      type: String,
      enum: ["submitted", "under_review", "resolved", "rejected"],
      default: "submitted",
    },
    adminNotes: { type: String, default: "" },
    resolvedAt: { type: Date },
  },
  { collection: "issue_reports", timestamps: true }
);

const IssueReport: Model<IIssueReport> =
  mongoose.models.IssueReport || mongoose.model<IIssueReport>("IssueReport", IssueReportSchema);

export default IssueReport;
