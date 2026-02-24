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
  address: Address;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
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
