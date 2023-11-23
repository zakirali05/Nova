import { cn } from "@/lib/utils"

export const MaxWidthRapper = ({children ,classname}:{children:React.ReactNode , classname? :string})=>{
    return (
        <main className={cn("max-w-6xl  mx-auto",classname)}>
            {children}
        </main>
    )
}