import { Section } from "@/components";
import { cn } from "@/utils";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-6">
      <Section className="flex gap-6">
        <Item href="/user/profile">Mon compte</Item>
        <Item href="/user/profile/resume">Mon CV</Item>
        <Item href="/user/profile/questionnaire">Questionnaire</Item>
      </Section>
    </header>
  );
}

function Item({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={href}
      className={cn("inline-flex items-center gap-2 border p-3 rounded-md")}
    >
      <div className="size-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.35518 14.1016C6.61952 14.2238 4.47656 14.8202 4.47656 16.5588C4.47656 18.1256 6.20783 18.7753 8.55755 18.9811"
            stroke="#0050C7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7253 13.4331C13.1886 13.4331 12.754 13.8687 12.754 14.4044L12.7531 14.8446C12.7531 15.1009 12.651 15.3472 12.4709 15.5292L12.1613 15.8388L12.1576 15.8416L12.1557 15.8434C11.779 16.2248 11.7817 16.8386 12.1622 17.2163L12.4709 17.5251C12.652 17.707 12.754 17.9533 12.754 18.2097V18.6535C12.754 19.1902 13.1886 19.6249 13.7253 19.6249H14.1664C14.4228 19.6249 14.6681 19.7269 14.8501 19.907L15.1588 20.2157L15.1625 20.2203L15.1643 20.2212C15.5448 20.598 16.1595 20.5952 16.5372 20.2148L16.846 19.906C17.0279 19.725 17.2742 19.623 17.5306 19.623H17.9744C18.5102 19.6239 18.9457 19.1902 18.9457 18.6535V18.2106C18.9457 17.9542 19.0477 17.708 19.2279 17.526L19.5375 17.2172L19.5412 17.2136C19.9198 16.8322 19.918 16.2174 19.5366 15.8398L19.2279 15.5301C19.0468 15.3481 18.9457 15.1019 18.9457 14.8455V14.4044C18.9457 13.8677 18.5111 13.4322 17.9744 13.4322H17.5315C17.2751 13.4322 17.0288 13.3311 16.8469 13.15L16.5345 12.8376L16.5335 12.8367C16.1531 12.459 15.5383 12.4608 15.1597 12.8413L14.851 13.151C14.669 13.3311 14.4237 13.4322 14.1673 13.4331H13.7253Z"
            stroke="#0050C7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5234 16.5816L15.3964 17.4555L17.1948 15.6562"
            stroke="#0050C7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4425 7.38433C14.4425 9.53004 12.7029 11.2696 10.5582 11.2696C8.41245 11.2696 6.67383 9.53004 6.67383 7.38433C6.67383 5.23954 8.41245 3.5 10.5582 3.5C12.7029 3.5 14.4425 5.23954 14.4425 7.38433Z"
            stroke="#0050C7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="size-1 rounded-full bg-primary" />

      {children}
    </NavLink>
  );
}
