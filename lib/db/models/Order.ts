import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IOrderProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface IOrderItem {
  product: IOrderProduct;
  quantity: number;
}

export interface IOrder extends Document {
  orderId: string;
  userId: Types.ObjectId;
  items: IOrderItem[];
  total: number;
  subtotal?: number;
  couponCode?: string;
  discountAmount?: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "return_requested" | "replacement_requested";
  date: string;
}

const OrderProductSchema = new Schema<IOrderProduct>(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { _id: false }
);

const OrderItemSchema = new Schema<IOrderItem>(
  {
    product: { type: OrderProductSchema, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: false }
);

const OrderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: { type: [OrderItemSchema], required: true },
  total: { type: Number, required: true },
  subtotal: { type: Number, default: null },
  couponCode: { type: String, default: null },
  discountAmount: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled", "return_requested", "replacement_requested"],
    default: "pending",
  },
  date: { type: String, required: true },
}, { collection: "orders" });

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
