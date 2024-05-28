import React, { createContext, useContext } from "react";

const LayoutAdminContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  menus: Record<string, string[]>;
}>({
  open: false,
  setOpen: () => {},
  menus: {},
});

export const useLayoutAdminContext = () => useContext(LayoutAdminContext);

export const LayoutAdminContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [open, setJustOpen] = React.useState(false);
  const menus: Record<string, string[]> = {
    "/admin": ["Dashboard", "Overview"],
    "/admin/applications": ["Applications", "Job post"],
    "/admin/applications/add": ["Job posting", "Post a job"],
    "/admin/profiles": ["Applicant profiles", "List of system applicants"],
    "/admin/profiles/add": ["Applicant profiles", "Create profile"],
    "/admin/companies": ["Manage companies", "Registered companies"],
    "/admin/companies/add": ["Manage companies", "Create company"],
    "/admin/trainings": ["Formations", "Formations"],
    "/admin/settings": ["Settings", "System settings"],
  };

  const setOpen = (value: boolean) => {
    localStorage.setItem("sideDrawerOpen", value.toString());
    setJustOpen(value);
  };

  React.useEffect(() => {
    const sideDrawerOpen = localStorage.getItem("sideDrawerOpen") === "true";
    setOpen(sideDrawerOpen);

    return () => {
      localStorage.setItem("sideDrawerOpen", open.toString());
      //   setMessage(undefined);
    };
  }, []);

  return (
    <LayoutAdminContext.Provider value={{ open, setOpen, menus }}>
      {children}
    </LayoutAdminContext.Provider>
  );
};
