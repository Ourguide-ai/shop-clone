import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import User, { IUser } from "@/lib/db/models/User";

const JWT_SECRET = process.env.JWT_SECRET!;

interface JwtPayload {
  userId: string;
}

export function signToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

export async function getAuthUser(request: NextRequest): Promise<IUser | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.slice(7);
  try {
    const payload = verifyToken(token);
    await dbConnect();
    const user = await User.findById(payload.userId);
    return user;
  } catch {
    return null;
  }
}

export function userToPublic(user: IUser) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    dob: user.dob,
    address: user.address
      ? {
          street: user.address.street || "",
          city: user.address.city || "",
          state: user.address.state || "",
          zipCode: user.address.zipCode || "",
          country: user.address.country || "",
        }
      : { street: "", city: "", state: "", zipCode: "", country: "" },
  };
}
