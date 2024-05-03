import { cn } from "@/utils";

export function TransparentTitle({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-[200px]/none font-bold opacity-[0.02]", className)}
      {...props}
    />
  );
}
