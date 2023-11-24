import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return  redirect("/");
  }

    const UserInDb = await db.user.findFirst({
      where: {
        UserId: user.id,
      },
    });

    if (UserInDb){
    
      return  redirect("/dashboard")
    }


    const newUser = await db.user.create({
      data:{
        UserId : user.id,
        email:user.email!,
      }
    })

    if(newUser){
     
      return  redirect("/dashboard")
    }
  

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
