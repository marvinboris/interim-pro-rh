import { cn } from "@/utils";
import React from "react";

export default function FooterTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-xl font-bold", className)} {...props} />;
}
