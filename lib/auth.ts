import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import User, { IUser } from "@/lib/db/models/User";

const JWT_SECRET = process.env.JWT_SECRET!;

interface JwtPayload {
  userId: string;
  role: string;
}

export function signToken(userId: string, role: string = "admin"): string {
  return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

function getBearerToken(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  return authHeader.slice(7);
}

function getCookieToken(request: NextRequest): string | null {
  return request.cookies.get("ebay-session")?.value ?? null;
}

export async function getAuthUser(request: NextRequest): Promise<IUser | null> {
  const token = getBearerToken(request) ?? getCookieToken(request);
  if (!token) return null;

  try {
    const payload = verifyToken(token);
    await dbConnect();
    return await User.findById(payload.userId);
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
    role: user.role || "admin",
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
