import { Section } from "@/components";
import { cn } from "@/utils";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function UserNav() {
  return (
    <header className="bg-white pt-12 border-b border-neutral-200">
      <Section className="flex items-end gap-16">
        <NavItem link="/user">Dashboard</NavItem>
        <NavItem link="/user/requests">Mes demandes</NavItem>
        <NavItem link="/user/profile">Mon profil</NavItem>
      </Section>
    </header>
  );
}

function NavItem({
  link,
  children,
}: {
  link: string;
  children?: React.ReactNode;
}) {
  const location = useLocation();
  const active = location.pathname === link;

  return (
    <NavLink
      className={cn(
        active ? "font-bold border-primary" : "border-transparent",
        "border-b-4 pb-5"
      )}
      to={link}
    >
      {children}
    </NavLink>
  );
}
