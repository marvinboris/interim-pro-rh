import { cn } from "@/utils";
import React from "react";

export default function Avatar({
  className,
  ...props
}: React.ComponentProps<"img">) {
  return <img {...props} className={cn("size-14 rounded-full", className)} />;
}
