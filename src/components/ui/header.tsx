import { cn } from "@/utils";

export function Header({
  children,
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "h-64 flex items-center justify-center relative z-0 text-6xl font-bold text-white/30 after:absolute after:inset-0 after:-z-10 after:bg-black/70",
        className
      )}
      {...props}
    >
      <img
        src="/images/0f33892c78cf195324cdcb3b5592aabe.png"
        alt="page header"
        className="size-full absolute inset-0 -z-20 object-cover"
      />

      {children}
    </header>
  );
}
