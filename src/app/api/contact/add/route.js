import connectToDB from "@/database";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Contact.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfuly",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong, please try again!",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong, please try again!",
    });
  }
}