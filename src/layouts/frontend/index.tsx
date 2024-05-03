import { ProfileCircle } from "iconsax-react";
import Footer from "./footer";
import Nav from "./nav";
import { LanguageSelector, Logo } from "@/components";
import { Link, Outlet } from "react-router-dom";

export function LayoutFrontend() {
  return (
    <div>
      <header className="flex items-center h-[90px]">
        <div className="container mx-auto flex items-center">
          <div className="mr-auto">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <Nav />

          <div className="ml-10">
            <LanguageSelector />
          </div>

          <Link
            className="flex items-center text-primary gap-6 ml-auto"
            to="/login"
          >
            <div className="font-semibold font-display underline text-sm">
              SIGN IN
            </div>

            <div className="size-14 flex items-center justify-center rounded-full bg-primary/10">
              <ProfileCircle className="size-6" />
            </div>
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
