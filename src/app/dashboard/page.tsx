import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


import UploadButtonComp from "@/components/UploadButtonComp";
import MyFiles from "@/components/MyFiles";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/");

  const userInDb = await db.user.findUnique({
    where: {
      UserId: user.id,
    },
  });

  if (!userInDb) return redirect("/auth-callback?origin=dashboard");

  return (
    <main>
      <div className="my-10">
        <div className="border-b py-2 border-muted-foreground/30 flex  items-center justify-between gap-3">
          <h2 className="text-2xl text-zinc-800  sm:text-3xl md:text-4xl font-bold">
            My Files
          </h2>
         <UploadButtonComp/>
        </div>

        <section className="my-6">
          <MyFiles/>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
