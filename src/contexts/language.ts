import { Language } from "@types";
import { createContext, useContext } from "react";

type Type = Language | undefined;
type Types = Language[];

export const LanguageContext = createContext<{
  language: Type;
  setLanguage: (language: Type) => void;
  languages: Types;
  setLanguages: (languages: Types) => void;
}>({
  language: undefined,
  setLanguage: () => {},
  languages: [],
  setLanguages: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);
