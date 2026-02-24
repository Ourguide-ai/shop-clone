import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import User from "@/lib/db/models/User";
import { getAuthUser, userToPublic } from "@/lib/auth";

export async function PUT(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { name, email, dob, address } = await request.json();

    await dbConnect();

    if (email) {
      const normalizedEmail = email.toLowerCase().trim();
      const existing = await User.findOne({
        email: normalizedEmail,
        _id: { $ne: user._id },
      });
      if (existing) {
        return NextResponse.json(
          { error: "An account with this email already exists" },
          { status: 409 }
        );
      }
      user.email = normalizedEmail;
    }

    if (name !== undefined) user.name = name.trim();
    if (dob !== undefined) user.dob = dob;
    if (address !== undefined) {
      user.address = {
        street: (address.street ?? "").trim(),
        city: (address.city ?? "").trim(),
        state: (address.state ?? "").trim(),
        zipCode: (address.zipCode ?? "").trim(),
        country: (address.country ?? "").trim(),
      };
    }

    await user.save();

    return NextResponse.json({ user: userToPublic(user) });
  } catch (error) {
    console.error("Update profile error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
