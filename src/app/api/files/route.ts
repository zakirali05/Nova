import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
try{
  const {getUser} = getKindeServerSession() 
  const user = await getUser()

const userInDb = await db.user.findFirst({
    where:{
        UserId: user?.id
    },
    include:{
        File :true
    }
  
})

if(!userInDb) {
    return NextResponse.json({sucess:false,message : "Unauthorize"})
}



return NextResponse.json({sucess:true,files:userInDb.File})
}catch(err){
    NextResponse.json({sucess:false,message : err})
}
}



