import Nav from "../ui/nav";
import Footer from "./footer";
import UserNav from "./nav";
import ProfilePic from "./profile-pic";
import { Logo } from "@/components";
import { Link, Outlet } from "react-router-dom";

export function LayoutUser() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-[90px] sticky top-0 bg-white/90 backdrop-blur z-50">
        <div className="container mx-auto flex items-center">
          <div className="mr-auto">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <Nav />

          <div className="ml-auto flex items-center gap-3.5">
            <ProfilePic />

            <div className="font-semibold">Hello, Yungong Briand !</div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <UserNav />

        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
