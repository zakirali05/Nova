import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const PricingPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <section>
      <div className="flex items-center justify-center my-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="space-y-2 flex flex-col items-center justify-center">
            <h3 className="font-bold text-3xl text-center ">Pricing</h3>
            <p className="text-muted-foreground text-center w-[70%]">
              Weather you are just trying out our service or need more
              we&apos;ve got you covered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="shadow-lg h-full bg-white rounded-md">
              <div className="p-8">
                <h2 className="font-semibold text-lg text-center">Free</h2>
                <p className="text-muted-foreground text-sm text-center">
                  For small side projects
                </p>
                <h2 className="font-bold text-4xl text-center mt-3">$0</h2>
                <p className="text-muted-foreground text-center text-sm">
                  Per month
                </p>
              </div>
              <div className="w-full p-2 bg-slate-100 text-center text-sm px-8 py-4">
                10 pdfs per month included
              </div>
              <div className="flex flex-col bg-white gap-2 p-8">
                <p className="text-muted-foreground flex items-center">
                  <Check className="h-4 w-4 mr-2" />5 pages per PDF
                </p>
                <p className="text-muted-foreground flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  4MB file size limit
                </p>
                <p className="text-muted-foreground  flex items-center">
                  <Check className="h-4 w-4 mr-2 " />
                  Mobile-friendly interface
                </p>

                <p className="text-muted-foreground  flex items-center">
                  <X className="h-4 w-4 mr-2" />
                  Higher-quality responses
                </p>

                <p className="text-muted-foreground flex items-center">
                  <X className="h-4 w-4 mr-2" />
                  Priority support
                </p>
              </div>
              <Button
                variant={"secondary"}
                size={"lg"}
                asChild
                className="w-full rounded-0"
              >
                {user ? (
                  <Link href="/dashboard">
                   Dashboard
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                ) : (
                  <Link href="/sign-up">
                    Sign up
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                )}
              </Button>
            </div>

            {/* Second grid */}
            <div className="shadow-lg h-full bg-white border-2 border-primary/50 rounded-md relative">
              <Badge className="absolute top-[-15px] right-[32%]">
                Upgrade Now
              </Badge>
              <div className="p-8">
                <h2 className="font-semibold text-lg text-center">Free</h2>
                <p className="text-muted-foreground text-sm text-center">
                  For small side projects
                </p>
                <h2 className="font-bold text-4xl text-center mt-3">$14.00</h2>
                <p className="text-muted-foreground text-center text-sm">
                  Per month
                </p>
              </div>
              <div className="w-full p-2 bg-slate-100 text-center text-sm px-8 py-4">
                100 pdfs per month included
              </div>
              <div className="flex flex-col bg-white gap-2 p-8">
                <p className="text-muted-foreground flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  25 pages per PDF
                </p>
                <p className="text-muted-foreground flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  16MB file size limit
                </p>
                <p className="text-muted-foreground  flex items-center">
                  <Check className="h-4 w-4 mr-2 " />
                  Mobile-friendly interface
                </p>

                <p className="text-muted-foreground  flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Higher-quality responses
                </p>

                <p className="text-muted-foreground flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Priority support
                </p>
              </div>
              <Button   size={"lg"} asChild className="w-full rounded-[0px] ">
                {user ? (
                  <Link href="/sign-up" >
                    Buy Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                ) : (
                  <Link href="/sign-up">
                    Sign up
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                )}
              </Button>
            </div>
            {/* Second grid ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
