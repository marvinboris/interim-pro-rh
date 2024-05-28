import { Language } from "@types";

export const getLanguages = async (): Promise<Language[]> => [
  {
    name: "English",
    abbr: "en",
    flag: "gb",
  },
  {
    name: "Français",
    abbr: "fr",
    flag: "fr",
  },
];
