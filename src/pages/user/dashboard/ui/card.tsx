import { cn } from "@/utils";
import { Icon } from "iconsax-react";
import React from "react";

export default function Card({
  title,
  color = "primary",
  value,
  icon: Icon,
}: {
  title: string;
  color?: "primary" | "like" | "dislike";
  value: React.ReactNode;
  icon: Icon;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 pb-5",
        color === "primary"
          ? "bg-primary text-white"
          : "bg-white border border-neutral-200"
      )}
    >
      <header>
        <div className="font-medium text-lg">{title}.</div>

        <div className="mt-4 w-11 h-1 bg-white/30" />
      </header>

      <div className="mt-3 flex items-center">
        <div className="text-3xl font-bold">{value}</div>

        <div
          className={cn(
            "size-12 ml-auto",
            {
              primary: "text-white",
              like: "text-like",
              dislike: "text-dislike",
            }[color]
          )}
        >
          <Icon />
        </div>
      </div>
    </div>
  );
}
