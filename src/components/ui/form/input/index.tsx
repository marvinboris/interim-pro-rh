import { checkValidity, cn } from "@/utils";
import { Validation } from "@types";
import { Eye, EyeSlash, SearchNormal1 } from "iconsax-react";
import React, { ChangeEvent, ReactNode, useState } from "react";

type InputProps = React.ComponentProps<"input"> & {
  innerRef?: React.RefObject<HTMLInputElement>;
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
  validation?: Validation;
  focusWithin?: "primary" | "secondary" | "accent";
};

export function Input({
  innerRef,
  label,
  addon,
  append,
  className,
  validation,
  focusWithin,
  ...props
}: InputProps) {
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);

  const validable = React.useMemo(
    () => touched && validation,
    [touched, validation]
  );
  const valid = React.useMemo(
    () =>
      validation
        ? Object.values(
            checkValidity(props.value as string, validation)
          ).reduce((a, b) => a && b, true)
        : true,
    [props.value, validation]
  );

  const onChange = props.onChange
    ? (e: ChangeEvent<HTMLInputElement>) => {
        setTouched(true);
        if (props.onChange) props.onChange(e);
      }
    : () => {
        return;
      };

  if (props.type === "password") {
    const Icon = !visible ? Eye : EyeSlash;
    append = (
      <button type="button" role="button" className="flex h-full items-center">
        <Icon
          onClick={() => setVisible((v) => !v)}
          className="w-4 md:w-5 h-4 md:h-5 cursor-pointer"
        />
      </button>
    );
  } else if (props.type === "search")
    append = <SearchNormal1 className="w-4 md:w-5 h-4 md:h-5" />;
  else if (props.type === "checkbox")
    return (
      <input
        {...props}
        ref={innerRef}
        className="accent-accent"
        onChange={onChange}
      />
    );

  return (
    <div className={cn("FormInput", className || "")}>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}

      <div
        className={cn(
          "wrapper",
          focusWithin
            ? {
                primary: "focus-within:border-primary",
                secondary: "focus-within:border-secondary",
                accent: "focus-within:border-accent",
              }[focusWithin]
            : "focus-within:border-accent",
          validable
            ? cn("!border-2", valid ? "!border-green-500" : "!border-red-500")
            : ""
        )}
      >
        {addon && <div className="addon">{addon}</div>}

        <div
          className={cn(
            addon ? "" : "pl-4 md:pl-5",
            validation ? "pr-8 md:pr-10" : "pr-4 md:pr-5",
            "content"
          )}
        >
          <input
            {...props}
            ref={innerRef}
            id={props.id || props.name}
            role="textbox"
            type={
              props.type === "password"
                ? visible
                  ? "text"
                  : "password"
                : props.type
            }
            onChange={onChange}
            className="main"
          />
        </div>

        {append && <div className="append">{append}</div>}
      </div>
    </div>
  );
}
