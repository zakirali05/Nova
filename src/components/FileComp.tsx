import Link from "next/link"
import { Button } from "./ui/button"
import { MessageSquare, Plus, Trash } from "lucide-react"
import { format } from 'date-fns'

const FileComp = ({file}:any) => {
  return (
    <div className="bg-white w-[90%] sm:w-full mx-auto  shadow-md p-3 rounded-md flex flex-col  h-[120px] justify-between">
        <div className="border-b h-[80px]  border-muted-foreground/30 pb-5 flex items-center gap-5">
            <div className="bg-gradient-to-r from-primary/50 to-primary   rounded-full h-8 w-8"></div>
            <h2 className="font-medium text-sm">{file.name}</h2>
        </div>
        <div className="flex  h-[40px] items-center justify-between pt-2 gap-3">
<p className="text-sm text-muted-foreground flex gap-2 items-center"><Plus className='h-4 w-4' />
                    {format(
                      new Date(file.createdAt),
                      'MMM yyyy'
                    )}</p>
<Link href={`/dashboard/${file.key}`} className="text-sm text-muted-foreground flex gap-2 items-center" >
    <MessageSquare className='h-4 w-4' />
                    chat</Link>
<Button variant="destructive"   size={"sm"} className="flex gap-2 items-center">
<Trash className='h-4 w-4' />
    delete</Button>
        </div>
    </div>
  )
}

export default FileComp