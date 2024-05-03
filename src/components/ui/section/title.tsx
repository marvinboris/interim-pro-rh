import { cn } from "@/utils";

export function SectionTitle({
  className,
  big,
  ...props
}: React.ComponentProps<"h2"> & { big?: boolean }) {
  return (
    <h2
      className={cn(
        "font-bold *:text-primary",
        big ? "text-[90px]/tight" : "text-6xl/tight",
        className
      )}
      {...props}
    />
  );
}
