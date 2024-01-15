
import Semester from "@/models/Semester";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { code } = await req.json();
    const user = await Semester.findOne({ code }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}