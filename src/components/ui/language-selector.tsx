import { Flag } from "./flag";
import { Transition } from "./transition";

import { useLanguageContext } from "@/contexts";
import { cn } from "@/utils";

import { Listbox } from "@headlessui/react";
import { Language } from "@types";
import { ArrowDown3 } from "iconsax-react";

export function LanguageSelector({ white = false }) {
  const { language, languages, setLanguage } = useLanguageContext();

  const changeLanguage = (language: Language) => {
    setTimeout(() => {
      setLanguage(language);
    }, 100);
  };

  return !language ? null : (
    <Listbox
      value={language}
      onChange={changeLanguage}
      as="div"
      className="Dropdown flex"
    >
      <Listbox.Button className="relative block cursor-default text-left">
        {language && (
          <div className="flex items-center justify-end gap-2 rounded-full cursor-pointer bg-neutral-100 py-2 px-3">
            <Flag
              size="1x1"
              code={language.flag}
              className="w-6 image-cover rounded-full"
            />

            <div className="font-medium capitalize text-neutral-700">
              {language.abbr}
            </div>

            <span className="pointer-events-none">
              <ArrowDown3
                className={cn(
                  "size-4 md:size-5",
                  white ? "text-white" : "text-zinc-800"
                )}
                aria-hidden="true"
              />
            </span>
          </div>
        )}
      </Listbox.Button>

      <Transition>
        <Listbox.Options className="Dropdown-content !w-32 md:!w-48">
          {languages
            ?.filter((l) => l.abbr !== language.abbr)
            .map((l, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  cn(
                    "Dropdown-item",
                    active ? "bg-secondary/20 text-secondary" : "text-zinc-800"
                  )
                }
                value={l}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  <Flag
                    code={l.flag}
                    className="w-6 md:w-8 aspect-video image-cover rounded"
                  />

                  <div className="truncate text-sm font-semibold">{l.name}</div>
                </div>
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
