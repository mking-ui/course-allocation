
import semester from "@/models/100level/semester";
import { NextResponse } from "next/server";

export async function GET (req, {params:{id}}){
    try {
     
      const level1 = await semester.findOne({_id:id})
      return NextResponse.json(level1)

    } catch (error) {
        return NextResponse.json("error in fetching single id");
    }
}

export async function PUT ({params:{id}, req}){
try {
   
    const body = await req.json();
    const updatelevel1 = await semester.findByIdAndUpdate(id,body);
    return NextResponse.json({msg:"updated", updatelevel1});
} catch (error) {
    return NextResponse.json("unable to update");
    
}
}