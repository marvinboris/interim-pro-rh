import { useLayoutAdminContext } from "../context";
import { useWindowSize } from "@/hooks";
import { cn } from "@/utils";
import { Icon } from "iconsax-react";
import { Iconly } from "react-iconly";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  href: string;
  exact?: boolean;
  name: string;
  icon: Icon | typeof Iconly;
}

export default function NavItem({
  href,
  icon: Icon,
  name,
  exact,
}: NavItemProps) {
  const { setOpen } = useLayoutAdminContext();

  const location = useLocation();
  const active = exact
    ? location.pathname === href
    : location.pathname.startsWith(href);

  const { width } = useWindowSize();

  return (
    <Link
      to={href}
      onClick={() => {
        if (width && width <= 1024) setOpen(false);
      }}
      className={cn(
        // 'transition-all duration-100',
        "rounded-xl pl-5 py-3.5 flex items-center truncate",
        active ? "bg-primary text-white w-full font-medium" : ""
      )}
    >
      <Icon
        variant={active ? "Bulk" : "Outline"}
        className={cn("size-5 lg:size-6 flex-none", {
          "text-primary": !active,
        })}
      />

      <div
        className={cn(
          // 'transition-all duration-100',
          "truncate capitalize ml-3 lg:ml-4"
        )}
      >
        {name}
      </div>
    </Link>
  );
}
