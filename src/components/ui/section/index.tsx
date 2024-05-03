import { cn } from "@/utils";

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("container mx-auto", className)} {...props} />;
}

export * from "./title";
export * from "./transparent-title";
