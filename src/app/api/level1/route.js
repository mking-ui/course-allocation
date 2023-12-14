
import semester from "@/models/100level/semester";
import { NextResponse } from "next/server";

//post
export async function POST(req) {
    try {
       
        const body = await req.json();
        const newlevel1 = await semester.create(body)
        return NextResponse.json({ msg: ["successfully created"], newlevel1 }, { status: 200 });

    } catch (error) {
        return NextResponse.json("error in creating post")
    }
}

//get

export async function GET(req) {
    try {
        
        const level1s = await semester.find();
        return NextResponse.json(level1s);

    } catch (error) {
        return NextResponse.json("fail to populate data")

    }
}

//delete
export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id")
     
        await semester.findByIdAndDelete(id)
        return NextResponse.json("succesfully deleted")
    } catch (error) {
        return NextResponse.json("unable to delete")
    }
}
