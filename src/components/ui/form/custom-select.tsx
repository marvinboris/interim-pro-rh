import { Listbox } from "@headlessui/react";
import {
  ArrowDown2,
  CloseCircle,
  Icon,
  InfoCircle,
  TickCircle,
} from "iconsax-react";
import React, { ReactNode } from "react";

import { Validation } from "@types";
import { checkValidity, cn, searchInObject } from "@/utils";

import { ButtonAdd } from "../buttons";
import { Transition } from "../transition";

import { Input } from "./input";

type Option = {
  icon?: Icon;
  value: string;
  label: string;
};

type CustomSelectProps = Omit<React.ComponentProps<"select">, "onChange"> & {
  label?: string;
  addon?: ReactNode;
  append?: ReactNode;
  validation?: Validation;
  onChange?: ((value: string) => void) | ((value: string[]) => void);
  options: Option[];
  sortByLabel?: boolean;
  searchable?: boolean;
  dropdown?: boolean;
};

export function CustomSelect({
  label,
  addon,
  append,
  validation,
  options,
  sortByLabel,
  searchable,
  dropdown,
  multiple,
  className,
  ...props
}: CustomSelectProps) {
  if (!multiple && !options.length) options = [{ value: "", label: "" }];

  if (options.length > 100) {
    searchable = true;
    dropdown = true;
    sortByLabel = true;
  }

  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState(
    multiple
      ? (props.value as string[]) || []
      : options.find((o) => o.value === props.value) || options[0]
  );

  const [touched, setTouched] = React.useState(false);

  const filteredOptions = (
    multiple
      ? options.filter((o) => !(selected as string[]).includes(o.value))
      : options
  )
    .filter(
      (_option, _index, options) => options.length <= 100 || search.length >= 3
    )
    .filter((option) => searchInObject(search, option));

  const sortedOptions = sortByLabel
    ? filteredOptions.sort((a, b) => a.label.localeCompare(b.label))
    : filteredOptions;

  const valid = validation
    ? Object.values(checkValidity(props.value as string, validation)).reduce(
        (a, b) => a && b,
        true
      )
    : true;

  const onChange = (option: Option) => {
    const newOption = option || options[0];
    const newSelected = multiple
      ? (selected as string[]).concat(newOption.value)
      : newOption;
    setSelected(newSelected);
    setTouched(true);
    props.onChange &&
      props.onChange(
        ("value" in newSelected ? newSelected.value : newSelected) as string &
          string[]
      );
  };

  React.useEffect(() => {
    setSelected(
      multiple
        ? (props.value as string[])
        : options.find((o) => o.value === props.value) || options[0]
    );
  }, [props.value]);

  const optionsBlock = (
    <Transition>
      <Listbox.Options
        className={cn("Dropdown-content", { "w-full left": !multiple })}
      >
        {searchable ? (
          <div className="p-2 sticky -top-2 z-10 bg-white">
            <Input
              autoFocus
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              label={`${"Search"}...${
                options.length > 100 ? ` (${"at least 3 characters"})` : ""
              }`}
            />
          </div>
        ) : null}
        {sortedOptions.map((option, index) => (
          <Listbox.Option
            key={index}
            className={({ active }) =>
              `Dropdown-item ${
                active ? "bg-primary/20 text-primary" : "text-zinc-800"
              }`
            }
            value={option}
          >
            {({ selected }) => (
              <div
                className={cn(
                  "flex items-center",
                  selected ? "font-semibold text-primary" : "font-normal"
                )}
              >
                {option.icon ? (
                  <option.icon
                    variant={selected ? "Bulk" : "Outline"}
                    className="size-4 md:size-5 mr-1.5 md:mr-2"
                  />
                ) : null}
                <span className="block truncate text-sm md:text-base">
                  {option.label}
                </span>
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  );

  return (
    <div className={className ? cn("FormInput", className) : "FormInput"}>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <Listbox
        as="div"
        className={cn("Dropdown", className)}
        value={selected}
        onChange={onChange}
      >
        {multiple ? (
          <>
            {(selected as string[]).map((value, index) => (
              <input
                key={value + index}
                type="hidden"
                name={props.name + "[]"}
                value={value}
              />
            ))}
            <div className="rounded-lg bg-stone-50 p-2 flex items-start gap-3">
              <div className="flex gap-2 flex-wrap flex-1">
                {(selected as string[]).map((value, index) => {
                  const label = options.find((o) => o.value === value)?.label;

                  return (
                    <div
                      key={value + index}
                      className="h-5 md:h-8 pl-2 md:pl-3 pr-1 py-1 bg-zinc-200 rounded-full justify-center items-center gap-2 inline-flex"
                    >
                      <div className="text-zinc-800 text-base font-normal leading-tight">
                        {label}
                      </div>
                      <CloseCircle
                        variant="Bulk"
                        className="size-5 text-primary"
                        onClick={() => {
                          const newSelected = (selected as string[]).filter(
                            (_, i) => i !== index
                          );
                          setSelected(newSelected);
                          props.onChange?.(newSelected as string & string[]);
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="relative">
                <Listbox.Button type="button" role="button">
                  <ButtonAdd div size="sm" />
                </Listbox.Button>

                {optionsBlock}
              </div>
            </div>
          </>
        ) : (
          <>
            <input
              type="hidden"
              name={props.name}
              value={(selected as Option)?.value}
            />
            <div className="relative">
              <div className="wrapper">
                {addon ||
                  ((selected as Option)?.icon && (
                    <div className="addon">
                      {addon ||
                        ("icon" in selected && selected.icon && (
                          <selected.icon className="mx-2 md:mx-3 w-5 md:w-6 h-5 md:h-6" />
                        ))}
                    </div>
                  ))}

                <div
                  className={cn(
                    addon || (selected as Option)?.icon ? "" : "pl-4 md:pl-5",
                    validation ? "pr-8 md:pr-10" : "pr-4 md:pr-5",
                    "content"
                  )}
                >
                  <Listbox.Button role="button" className="main">
                    <div className="pr-3 md:pr-5">
                      <span className="block truncate text-left">
                        {(selected as Option)?.label}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 md:pr-2">
                        <ArrowDown2
                          className="h-4 md:h-5 w-4 md:w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Listbox.Button>

                  {touched && validation ? (
                    <div className="validation">
                      {valid ? (
                        <TickCircle className="w-4 text-secondary" />
                      ) : (
                        <InfoCircle className="w-4 text-accent" />
                      )}
                    </div>
                  ) : null}
                </div>
                {append && <div className="append">{append}</div>}
              </div>

              {optionsBlock}
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
