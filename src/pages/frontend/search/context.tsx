import { Job } from "@types";
import React, { createContext, useContext } from "react";

const PageSearchContext = createContext<{
  selected: Job | undefined;
  setSelected: React.Dispatch<React.SetStateAction<Job | undefined>>;
  data: Job[];
  setData: React.Dispatch<React.SetStateAction<Job[]>>;
}>({
  selected: undefined,
  setSelected: () => {},
  data: [],
  setData: () => {},
});

export const usePageSearchContext = () => useContext(PageSearchContext);

export const PageSearchContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [data, setData] = React.useState<Job[]>([]);
  const [selected, setSelected] = React.useState<Job>();

  return (
    <PageSearchContext.Provider
      value={{ selected, setSelected, data, setData }}
    >
      {children}
    </PageSearchContext.Provider>
  );
};
