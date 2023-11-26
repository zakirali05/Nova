import PdfRenderer from "@/components/PdfRenderer"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

const Chatpage = async ({ params }: { params: { fileId: string } }) => {
  const file = await db.file.findFirst({
    where:{
      id:params.fileId
    }
  })
  if(!file){
    return redirect("/dashboard")
  }
  return (
    <section className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-screen">
        <PdfRenderer url={file.url} />
        <div className="min-h-screen">ChatRenderer</div>
      </div>
    </section>
  )
}

export default Chatpage