import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IBlogComment extends Document {
  postId: Types.ObjectId;
  userId: Types.ObjectId;
  userName: string;
  userRole: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogCommentSchema = new Schema<IBlogComment>(
  {
    postId: { type: Schema.Types.ObjectId, ref: "BlogPost", required: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    userRole: { type: String, required: true },
    text: { type: String, required: true, trim: true },
  },
  { collection: "blog_comments", timestamps: true }
);

const BlogComment: Model<IBlogComment> =
  mongoose.models.BlogComment || mongoose.model<IBlogComment>("BlogComment", BlogCommentSchema);

export default BlogComment;
