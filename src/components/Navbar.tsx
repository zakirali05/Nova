import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserAccountNav from "./UserAccountNav";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b border-muted shadow-sm">
      <div className="mx-auto max-w-6xl p-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Nova.
          </Link>
          <div className="flex items-center gap-5">
            <Link
              className={cn(
                "text-sm text-muted-foreground hover:text-black transition-all"
              )}
              href="/pricing"
            >
              Pricing
            </Link>
            {user ? (
              <></>
            ) : (
              <LoginLink
                className={cn(
                  "text-sm text-muted-foreground hover:text-black transition-all"
                )}
              >
                Sign in
              </LoginLink>
            )}
            {user ? (
              
                <>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-black">
                  dashboard
                  </Link>
                  <UserAccountNav email={user.email!} imageUrl={user.picture!} name={user.given_name!}   />
                  </>
            ) : (
              <Button size={"sm"} asChild>
                <RegisterLink>
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </RegisterLink>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
