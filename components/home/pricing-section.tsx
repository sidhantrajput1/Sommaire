import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Plan = {
  id: string;
  name: string;
  price: number;
  description: string;
  items: string[];
  paymentLink?: string;
  priceId?: string;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "For individuals getting started",
    items: [
      "5 PDF summaries / month",
      "Standard processing",
      "Community support",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
];

// ---------------- Components ----------------
const PricingCard = ({
  id,
  name,
  price,
  description,
  items,
  paymentLink,
}: Plan) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 duration-300 hover:transition-all">
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border border-gray-500/20 rounded-2xl",
          id === "pro" && "border-rose-500 gap-5 border-2"
        )}
      >
        <div className="flex  items-center gap-4">
          <div className="">
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">{price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-2.5 leading-relaxed text-base">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckIcon size={18} className="text-rose-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 flex justify-center w-full">
          <Link
            href={"paymentLink"}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2",
              id === "pro" ? "border-rose-900" : "border-rose-100 from-rose-400 to-rose-500"
            )}
          >
            Buy Now <ArrowRight size={18}></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ---------------- Section ----------------
export default function PricingSection() {
  return (
    <section className="overflow-hidden relative" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center w-full pb-12">
          <h2 className="uppercase font-bold text-xl mb-8 text-rose-500">Pricing</h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
