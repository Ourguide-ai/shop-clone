import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  productId: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  warrantyDurationMonths: number;
}

const ProductSchema = new Schema<IProduct>({
  productId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  warrantyDurationMonths: { type: Number, default: 12 },
}, { collection: "products" });

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
