import { cn } from "@/lib/utils";
import React from "react";

export default function BgGradient({ className }: { className?: string }) {
  return (
    <div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-32"
      >
        <div
          className={cn(
            "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] " +
              "-translate-x-1/2 rotate-[30deg] " +
              "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 " +
              "opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]",
            className
          )}
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, " +
              "79% 91%, 50% 70%, 21% 91%, 32% 57%, " +
              "2% 35%, 39% 35%)",
          }}
        />
      </div>
    </div>
  );
}

/**
 className={`relative isolate ${className}`}

<div
style={{
clipPath:
"polygon (50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%),

className="relative left-[calc(50%-11rem)] aspect-1155/678
w-[36.125rem] -translate-x-1/2 rotate-[30deg]
bg-linear-to-br HE from-emerald-500 Evia-teal-500 MH to-cyan-5¢
opacity-20 sm:left-[calc(50%-3@rem)] sm:w-[72rem]"
/>


 */
