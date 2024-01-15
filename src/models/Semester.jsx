import mongoose, { Schema, model, models } from "mongoose";
mongoose.connect(process.env.MONGODB_URL)

const SemesSchema1= new Schema(
  {
    code:String,
    title:String,
    description:String,
    name:String,
    position:String,
    specializes:String,
    email: String,
    phone:String,
    image:String
  },{timestamps:true}
)

const SemesSchema2= new Schema(
  {
    code:String,
    title:String,
    description:String,
    name:String,
    position:String,
    specializes:String,
    email: String,
    phone:String,
    image:String
  },{timestamps:true}
)

export default models.Semester||model ("Semester",SemesSchema1);
export const Semester2 = models.Semester2||model ("Semester2",SemesSchema2)