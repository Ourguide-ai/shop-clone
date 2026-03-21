import mongoose, { Schema, Document, Model, Types } from "mongoose";

export type BlogCategoryType = "buying-guides" | "how-to" | "comparisons" | "industry-news";

export interface IBlogPost extends Document {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: BlogCategoryType;
  tags: string[];
  authorId: Types.ObjectId;
  authorName: string;
  status: "draft" | "published";
  publishedAt?: Date;
  metaTitle: string;
  metaDescription: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true, trim: true },
    featuredImage: { type: String, default: "" },
    category: {
      type: String,
      enum: ["buying-guides", "how-to", "comparisons", "industry-news"],
      required: true,
    },
    tags: { type: [String], default: [] },
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    authorName: { type: String, required: true },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    publishedAt: { type: Date, default: null },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
  },
  { collection: "blog_posts", timestamps: true }
);

const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPost;
