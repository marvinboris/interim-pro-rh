import { LanguageSelector } from "@/components";
import { useLayoutAdminContext } from "../context";
import { Setting } from "iconsax-react";
import Messages from "./messages";
import Notifications from "./notifications";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { menus } = useLayoutAdminContext();

  const location = useLocation();

  const [title, setTitle] = React.useState<string>();
  const [subtitle, setSubtitle] = React.useState<string>();

  React.useEffect(() => {
    const [title, subtitle] = menus[location.pathname];
    setTitle(title);
    setSubtitle(subtitle);
  }, [location.pathname]);

  return (
    <header className="bg-white border-b border-neutral-200 h-28 px-12 flex items-center">
      <div>
        <h1 className="font-bold text-2xl">{title}</h1>

        <h2 className="font-medium">{subtitle}</h2>
      </div>

      <div className="ml-auto">
        <LanguageSelector />
      </div>

      <div className="ml-12 flex items-center gap-5">
        <Messages />

        <Notifications />
      </div>

      <div className="mr-5 ml-8 w-1 h-12 rounded-full bg-neutral-200" />

      <div>
        <div className="font-bold text-lg">My account</div>
        <div className="font-semibold text-neutral-500">Admin</div>
      </div>

      <button className="ml-4 size-14 rounded-xl bg-primary text-white flex justify-center items-center">
        <Setting className="size-6" />
      </button>
    </header>
  );
}
