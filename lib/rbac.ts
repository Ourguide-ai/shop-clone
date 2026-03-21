import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth";
import { IUser, UserRole } from "@/lib/db/models/User";

export async function requireAuth(
  request: NextRequest
): Promise<{ user: IUser } | NextResponse> {
  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  return { user };
}

export async function requireRole(
  request: NextRequest,
  allowedRoles: UserRole[]
): Promise<{ user: IUser } | NextResponse> {
  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (!allowedRoles.includes(user.role || "buyer")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  return { user };
}

export function isResponse(result: { user: IUser } | NextResponse): result is NextResponse {
  return result instanceof NextResponse;
}
