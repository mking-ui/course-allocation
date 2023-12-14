import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "@/components/credentials/LoginForm";

export default async function page() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
  
  return (
    <div>
      <LoginForm/>
    </div>
  )
}
