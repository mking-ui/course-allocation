
import { Semester2 } from "@/models/semester";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { code } = await req.json();
    const user = await Semester2.findOne({ code }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}