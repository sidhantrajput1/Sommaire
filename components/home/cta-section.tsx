import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Text Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl sm:text-4xl">
              Ready to Save Hours of Reading Time?
            </h2>
            <p className="mx-auto text-gray-600 max-w-[700] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <div>
              <Button
                size="lg"
                variant="default"
                className="w-full min-[400px]:w-auto bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:text-white text-white hover:transition-all duration-300"
                asChild
              >
                <Link
                  href="/#pricing"
                  className="flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
