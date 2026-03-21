import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IAvailabilitySlot {
  date: string;
  startTime: string;
  endTime: string;
}

export interface IRepairRequest extends Document {
  userId: Types.ObjectId;
  orderId: string;
  productId: number;
  productTitle: string;
  productImage: string;
  phoneNumber: string;
  defectDescription: string;
  availabilitySlots: IAvailabilitySlot[];
  warrantySlipUrl: string;
  scheduledDate: string;
  scheduledTime: string;
  status: "pending" | "scheduled" | "in_progress" | "completed" | "cancelled";
  createdAt: Date;
}

const AvailabilitySlotSchema = new Schema<IAvailabilitySlot>(
  {
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  { _id: false }
);

const RepairRequestSchema = new Schema<IRepairRequest>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: String, required: true },
    productId: { type: Number, required: true },
    productTitle: { type: String, required: true },
    productImage: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    defectDescription: { type: String, required: true },
    availabilitySlots: { type: [AvailabilitySlotSchema], required: true },
    warrantySlipUrl: { type: String, required: true },
    scheduledDate: { type: String, default: "" },
    scheduledTime: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "scheduled", "in_progress", "completed", "cancelled"],
      default: "scheduled",
    },
  },
  { collection: "repair_requests", timestamps: true }
);

const RepairRequest: Model<IRepairRequest> =
  mongoose.models.RepairRequest ||
  mongoose.model<IRepairRequest>("RepairRequest", RepairRequestSchema);

export default RepairRequest;
