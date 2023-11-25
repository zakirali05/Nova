"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { File, Loader2, MessageSquare, Plus, Trash } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";




const FileComp = ({ file }: any) => {

  const [loading,setLoading] = useState(false)
const router = useRouter()

  const deleteDocument = async (id:any)=>{
try{
setLoading(true)

const deleted = await axios.delete(`/api/files/${id}`)
if(deleted){

  window.location.reload()
}
}catch(err){
  console.log(err)
}finally{
setLoading(false)
}
  }

  return (
    <div className="bg-white w-[90%] sm:w-full mx-auto  shadow-md p-3 rounded-md flex flex-col  h-[120px] justify-between">
      <div className="border-b h-[80px]  border-muted-foreground/30 pb-5 flex items-center gap-5">
        <div className="bg-gradient-to-r from-primary/50 to-primary   rounded-full h-8 w-8"></div>
        <h2 className="font-medium text-sm">{file.name}</h2>
      </div>
      <div className="flex  h-[40px] items-center justify-between pt-2 gap-3">
        <p className="text-sm text-muted-foreground flex gap-2 items-center">
          <Plus className="h-4 w-4" />
          {format(new Date(file.createdAt), "MMM yyyy")}
        </p>
        <Link
          href={`/dashboard/${file.key}`}
          className="text-sm text-muted-foreground flex gap-2 items-center"
        >
          <MessageSquare className="h-4 w-4" />
          chat
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size={"sm"}
              variant={"destructive"}
              className="flex gap-2 items-center"
            >
              <Trash className="h-4 w-4" />
              delete
            </Button>
          </DialogTrigger>

          <DialogContent className="">
            {loading ?<div className="flex flex-col items-center justify-center gap-3 py-4">
           <Loader2  className="h-5 w-5 animate-spin"/>
             <p>Deleting your document...</p>
            </div> : <>  <div className="font-medium text-lg  flex flex-col gap-2 border-b border-muted-foreground/40 py-5">
             <h3 className="">Are you sure you want to delete this document?</h3>
              <p className="text-xs text-muted-foreground flex gap-2 items-center"><File className="h-4 w-4"/> {file.name}</p>
            </div>
            <div className="w-full flex justify-end gap-3">
              <DialogClose asChild>
              <Button variant={"secondary"}>Cancel</Button>
              </DialogClose>
              <Button variant={"destructive"} onClick={()=>deleteDocument(file.id)}>Delete</Button>
            </div></>
            }
          
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default FileComp;
