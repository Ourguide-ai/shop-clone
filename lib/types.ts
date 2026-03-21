export type UserRole = "admin" | "buyer" | "seller";

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface User {
  id: string;
  name: string;
  dob: string;
  email: string;
  password: string;
  role: UserRole;
  address: Address;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  avgRating?: number;
  reviewCount?: number;
  warrantyDurationMonths?: number;
}

export interface RepairRequest {
  id: string;
  orderId: string;
  productId: number;
  productTitle: string;
  productImage: string;
  phoneNumber: string;
  availabilitySlots: { date: string; startTime: string; endTime: string }[];
  warrantySlipUrl: string;
  scheduledDate: string;
  scheduledTime: string;
  status: "pending" | "scheduled" | "in_progress" | "completed" | "cancelled";
  defectDescription: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  subtotal?: number;
  couponCode?: string;
  discountAmount?: number;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "return_requested" | "replacement_requested";
}

export interface Review {
  id: string;
  productId: number;
  userName: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

export interface QuestionAnswer {
  id: string;
  answererName: string;
  answerText: string;
  createdAt: string;
}

export interface Question {
  id: string;
  productId: number;
  askerName: string;
  questionText: string;
  answers: QuestionAnswer[];
  upvoteCount: number;
  hasUpvoted: boolean;
  createdAt: string;
}

export interface PriceMatchRequest {
  id: string;
  productId: number;
  productTitle: string;
  competitorName: string;
  competitorUrl: string;
  competitorPrice: number;
  screenshotUrl?: string;
  email: string;
  notes?: string;
  status: "pending" | "approved" | "rejected";
  adminNotes?: string;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minOrderAmount: number;
  maxDiscount?: number;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
  expiresAt: string;
  createdAt: string;
}

export interface AppliedCoupon {
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  discountAmount: number;
}

export type BlogCategory = "buying-guides" | "how-to" | "comparisons" | "industry-news";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  authorName: string;
  status: "draft" | "published";
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  createdAt: string;
}

export interface BlogComment {
  id: string;
  userName: string;
  userRole: UserRole;
  text: string;
  createdAt: string;
}

export interface IssueReport {
  id: string;
  orderId: string;
  items: { productId: number; productTitle: string; productImage: string }[];
  issueType: "damaged" | "wrong_item" | "missing_parts" | "defective" | "not_as_described";
  description: string;
  evidenceUrls: string[];
  resolutionPreference: "refund" | "replacement" | "repair" | "store_credit";
  status: "submitted" | "under_review" | "resolved" | "rejected";
  adminNotes?: string;
  createdAt: string;
}
