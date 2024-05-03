import { Loading } from "@/components";
import { DEFAULT_COUNTRY, DEFAULT_LOCALE } from "@/config";
import { CountriesContext, LanguageContext, MessageContext } from "@/contexts";
import { getCountries, getLanguages } from "@/data";
import { Country, Language, Message } from "@types";
import React from "react";

export function LayoutApp({ children }: { children?: React.ReactNode }) {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [defaultCode, setDefaultCode] = React.useState("");
  const [language, setLanguage] = React.useState<Language>();
  const [languages, setLanguages] = React.useState<Language[]>([]);
  const [message, setMessage] = React.useState<Message>();

  React.useEffect(() => {
    if (languages) {
      setLanguage(languages[0]);
    }
  }, [languages]);

  React.useEffect(() => {
    getCountries().then((countries) => {
      setCountries(countries);
      const defaultCode =
        countries.find((c) => c.country === DEFAULT_COUNTRY.toUpperCase())
          ?.code || "";
      setDefaultCode(defaultCode);
    });
  }, []);

  React.useEffect(() => {
    getLanguages().then((languages) => {
      setLanguages(languages);

      const language = languages.find(
        (language) =>
          language.abbr === localStorage.getItem("lang") ||
          language.abbr === DEFAULT_LOCALE
      ) || {
        abbr: "en",
        flag: "gb",
        name: "English",
      };
      setLanguage(language);
    });
  }, []);

  React.useEffect(() => {
    if (!languages.length)
      getLanguages().then((languages) => {
        setLanguages(languages);

        const language = languages.find(
          (language) =>
            language.abbr === localStorage.getItem("lang") ||
            language.abbr === DEFAULT_LOCALE
        ) || {
          abbr: "en",
          flag: "gb",
          name: "English",
        };
        setLanguage(language);
      });
  }, [languages, setLanguage]);

  return languages ? (
    <CountriesContext.Provider value={{ countries, defaultCode, setCountries }}>
      <LanguageContext.Provider
        value={{ language, languages, setLanguage, setLanguages }}
      >
        <MessageContext.Provider value={{ message, setMessage }}>
          {children}
        </MessageContext.Provider>
      </LanguageContext.Provider>
    </CountriesContext.Provider>
  ) : (
    <Loading />
  );
}
