import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight} from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
   <section className="mt-10 mb-10">
            <div className='absolute top-[28rem] w-[200px] h-[200px] z-[-1]  blur-[4rem] bg-primary/40'/>

   <div className="p-3 flex flex-col gap-[5rem]  items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-3">
      <Badge variant="secondary" className="bg-white  shadow-lg">Nova is now public !</Badge>
      <h2 className=" text-4xl md:text-5xl font-bold md:w-[70%] text-center leading-[2.8rem]  md:leading-[3.5rem]">Chat with your <span className="text-primary">documents</span> in seconds.</h2>
      <p className="text-muted-foreground md:w-[50%] text-center">Nova allows you to have conversation with any pdf.Just upload the document and start asking questions right away. </p>
      <Button size="default" asChild>
                            <Link href="/sign-up">
                            Get Started
                            <ArrowRight className="h-4 w-4 ml-2"/>
                            </Link>
                        </Button>
    </div>
  <div className="p-2 rounded-md  bg-gray-300/30 ">
    <Image
    alt="dashboard image"
    src="/dashboard-preview.jpg"
    width={700}
    height={700}
    />
  </div>

  <div className="flex flex-col items-center justify-center gap-12">
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-2xl text-center">Start chatting in minutes</h3>
      <p className="text-muted-foreground text-center">Chatting with your pdf file has never been easier with Nova.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <div className="p-2 border-t border-gray-300 space-y-2">
        <p className="text-blue-600">Step 1</p>
        <h3 className="text-lg font-semibold">Sign up for an account</h3>
        <p className="pr-5  text-muted-foreground">Either start with free trial or choose our <Link href="/pricing" className="underline text-blue-600">Pro plan</Link></p>
      </div>

      <div className="p-2 border-t border-gray-300 space-y-2">
        <p className="text-blue-600">Step 2</p>
        <h3 className="text-lg font-semibold">Upload your pdf</h3>
        <p className="pr-5  text-muted-foreground">We will process your file and make it ready for you to chat.</p>
      </div>

      <div className="p-2 border-t border-gray-300 space-y-2 ">
        <p className="text-blue-600">Step 3</p>
        <h3 className="text-lg font-semibold">Start asking questions</h3>
        <p className="pr-5  text-muted-foreground">Its that simple, try out Nova today . it takes less than a minute.</p>
      </div>
    </div>
    <div className="p-2 rounded-md bg-gray-300/30 ">
    <Image
    alt="Uploading image"
    src="/file-upload-preview.jpg"
    width={700}
    height={700}
    />
  </div>
  </div>
   </div>
   </section>
  )
}
