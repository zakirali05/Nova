import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const DashboardPage = async ()=>{
const {getUser} = getKindeServerSession()
const user = await getUser()

if(!user) return redirect("/")

const userInDb = await db.user.findUnique({
    where:{
        UserId : user.id
    }
})

if (!userInDb) return redirect("/auth-callback")

    return (
        <div>Dashboard</div>
    )
}

export default DashboardPage