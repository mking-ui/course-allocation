import mongoose, { Schema, model, models } from "mongoose";
mongoose.connect(process.env.MONGODB_URI)

const SemesSchema= new Schema(
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
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = models.User || mongoose.model("User", userSchema);
export default models.Semester||model ("Semester",SemesSchema)