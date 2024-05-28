import { Outlet } from "react-router-dom";
import { LayoutAdminContextProvider } from "./context";
import SideDrawer from "./side-drawer";
import Header from "./header";
import Footer from "./footer";

export function LayoutAdmin() {
  return (
    <LayoutAdminContextProvider>
      <div className="h-screen flex relative">
        <SideDrawer />

        <div className="border-l flex-1 border-neutral-200 flex flex-col h-screen overflow-clip">
          <Header />

          <main className="flex-1 bg-stone-50 p-12 flex flex-col overflow-auto">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </LayoutAdminContextProvider>
  );
}
