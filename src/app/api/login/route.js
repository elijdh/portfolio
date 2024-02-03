import User from "@/models/User";
import connectToDB from "@/database";
import { NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const checkUser = await User.findOne({ username });

    if (!checkUser) {
      console.log("login");
      return NextResponse.json({
        success: false,
        message: "Username does not exist",
      });
    }

    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Wrong passord. Please try again.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Login Successful",
    });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, please try again!",
    });
  }
}
