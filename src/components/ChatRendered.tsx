"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Plane, Send } from "lucide-react"

const ChatRendered = () => {

    const schema = z.object({
        message : z.string().min(0,"Type the message first")
    })
    
const form = useForm<z.infer <typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "",
    }
})

function onSubmit(values : z.infer<typeof schema>){
    console.log(values)
}

  return (
    <section className="max-h-[calc(100vh-4rem)] flex flex-col min-h-[calc(100vh-4rem)]">
        <div className="flex-1 bg-white "></div>
        <div className="bg-slate-100 w-full p-3 border">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-1 w-full">
  <FormField
    control={form.control}
    name="message"
    render={({field}) => (
      <FormItem className="w-full">
        <FormControl >
        <Input  placeholder="Type your message..." {...field} />
        </FormControl>
      </FormItem>
    )}
  />
  <Button size={"icon"}><Send className="h-5 w-5"/></Button>

  </form>
</Form>
        </div>
    </section>
  )
}

export default ChatRendered