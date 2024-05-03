import { Country } from "@types";
import { createContext, useContext } from "react";

type Type = Country[];

export const CountriesContext = createContext<{
  defaultCode: string;
  countries: Type;
  setCountries: (countries: Type) => void;
}>({
  defaultCode: "",
  countries: [],
  setCountries: () => {},
});

export const useCountriesContext = () => useContext(CountriesContext);
