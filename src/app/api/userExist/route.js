
import Semester, { Semester2 } from "@/models/Semester";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { code} = await req.json();
    const user1 = await Semester.findOne({ code }).select("_id");
    const user2 = await Semester2.findOne({ code }).select("_id");
    const user = { user1, user2};

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
