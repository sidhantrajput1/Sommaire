import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-7xl z-0 py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12">
      <div className="w-full relative flex flex-col items-center text-center">
        <div className="p-[1px] relative overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge
            variant="secondary"
            className="px-6 py-2 relative text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
          >
            <Sparkles className="h-6 w-6 text-rose-600 animate-pulse" />
            <span className="text-base text-rose-600">Powered by AI</span>
          </Badge>
        </div>

        <h1 className="font-bold py-6 text-3xl sm:text-4xl lg:text-5xl">
          Transform PDFs into{" "}
          <span className="inline-block relative">
            <span className="relative z-10 px-2">concise</span>
            <span className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"></span>
          </span>
          summaries
        </h1>

        <h2 className="text-lg sm:text-xl lg:text-2xl px-4 lg:px-0 lg:max-w-4xl text-gray-600">
          Get a beautiful reel of the document in seconds
        </h2>

        <Button
          variant="link"
          className="text-white mt-6 text-base rounded-full sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-12 bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold shadow-lg transition-all duration-300"
        >
          <Link href="/#pricing" className="flex gap-1 items-center">
            <span>Try Sommaire</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
