import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req:NextRequest,{ params }: { params: { id: string }}){
    try{
const file = await db.file.findFirst({
    where:{
        id:params.id
    }
})

if(!file){
    return NextResponse.json({message:"file donst exists"})
}


const deleted = await db.file.delete({
    where:{
        id:params.id,
    }
})


return NextResponse.json({success:true})
    }catch(err){
        return NextResponse.json(err)
    }
}