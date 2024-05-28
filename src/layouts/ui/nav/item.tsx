import { cn } from "@/utils";
import { Link, useLocation } from "react-router-dom";

export default function Item({
  href,
  exact,
  children,
}: {
  href: string;
  exact?: boolean;
  children?: React.ReactNode;
}) {
  const location = useLocation();
  const active = exact
    ? location.pathname === href
    : location.pathname.startsWith(href);

  return (
    <Link
      to={href}
      className={cn("text-sm uppercase", { "text-primary font-bold": active })}
    >
      {children}
    </Link>
  );
}
