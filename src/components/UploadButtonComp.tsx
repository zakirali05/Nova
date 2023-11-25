"use client";

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { UploadDropzone } from "@/lib/uploadthing";
import { Progress } from "./ui/progress";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const UploadButtonComp = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload pdf</Button>
      </DialogTrigger>
      <DialogContent>
        <section className="flex flex-col gap-10 items-center justify-center p-10 m-4 bg-slate-200/60">
          {loading ? (
            <div className="w-full mt-24 flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">
                  Uploading your document...
                </h3>
                <p>You will be redirected automatically.</p>
              </div>
            </div>
          ) : (
            <UploadDropzone
              appearance={{
                uploadIcon: {
                  height: "70px",
                  color:"gray"
                },
                button: {
                  background: "rgb(124,58,237)",
                  padding: "0.7rem",
                  color: "white",
                  marginTop: "1rem",
                },
                
              }}
              className=" p-3"
              endpoint="pdfUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setLoading(false);
                setProgress(100);
                router.push(`/dashboard/${res[0].key}`);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                // alert(`ERROR! ${error.message}`);
              }}
              onUploadBegin={() => {
                setLoading(true);
                setProgress(90)
              }}
            
            />
          )}

          <Progress
            value={progress}
            indicatorColor="bg-emerald-500"
            className="w-full h-3"
          />
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default UploadButtonComp;
