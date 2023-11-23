"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.pathname);
  }, [url]);

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
                "text-sm text-muted-foreground hover:text-black transition-all",
                url === "/pricing" ? "text-black" : "text-muted-foreground"
              )}
              href="/pricing"
            >
              Pricing
            </Link>

            <Link
              className={cn(
                "text-sm text-muted-foreground hover:text-black transition-all",
                url === "/sign-in" ? "text-black" : "text-muted-foreground"
              )}
              href="/sign-in"
            >
              Sign in
            </Link>
            <Button size={"sm"} asChild>
              <Link href="/sign-up">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
