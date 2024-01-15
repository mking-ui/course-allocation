
import { Semester2 } from "@/models/Semester";
import { NextResponse } from "next/server";

//post
export async function POST(req) {
    try {
       
        const body = await req.json();
        const newlevel2 = await Semester2.create(body)
        return NextResponse.json({ msg: ["successfully created"], newlevel2 }, { status: 200 });

    } catch (error) {
        return NextResponse.json("error in creating post")
    }
}

//get

export async function GET(req) {
    try {
        
        const level2s = await Semester2.find();
        return NextResponse.json(level2s);

    } catch (error) {
        return NextResponse.json("fail to populate data")

    }
}

//delete
export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id")
     
        await Semester2.findByIdAndDelete(id)
        return NextResponse.json("succesfully deleted")
    } catch (error) {
        return NextResponse.json("unable to delete")
    }
}
