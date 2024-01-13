
import { Semester2 } from "@/models/semester";
import { NextResponse } from "next/server";

export async function GET (req, {params:{id}}){
    try {
     
      const level1 = await Semester2.findOne({_id:id})
      return NextResponse.json(level1)

    } catch (error) {
        return NextResponse.json("error in fetching single id");
    }
}

export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const {
      newCode: code,
      newTitle: title,
      newDescription: description,
      newName: name,
      newPosition : position,
      newSpecializes: specializes,
      newEmail: email,
      newPhone: phone,
      newImage: image,
    } = await request.json();
    const newUser = {
      code,
      title,
      description,
      name,
      position,
      specializes,
      email,
      phone,
      image,
    };
    //Use the Model to update
    await Semester2.findByIdAndUpdate(id, newUser);
    return NextResponse.json(
      {
        message: "User Updated successfully",
        data: newUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}