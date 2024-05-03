import ReactOwlCarousel from "react-owl-carousel";
import { cn } from "@/utils";
import React from "react";

export function OwlCarousel({
  className,
  ...props
}: React.ComponentProps<typeof ReactOwlCarousel>) {
  return <ReactOwlCarousel {...props} className={cn("owl-theme", className)} />;
}
