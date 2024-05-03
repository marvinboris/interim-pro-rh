import { checkValidity, cn } from "@/utils";
import { Validation } from "@types";
import { TickCircle, Warning2 } from "iconsax-react";
import { ChangeEvent, ComponentProps, ReactNode, useState } from "react";

type SelectProps = ComponentProps<"select"> & {
  inputSize?: "sm" | "lg";
  label?: ReactNode;
  addon?: ReactNode;
  append?: ReactNode;
  validation?: Validation;
  focusWithin?: "primary" | "secondary" | "accent";
};

export function Select({
  label,
  addon,
  append,
  className,
  validation,
  focusWithin,
  ...props
}: SelectProps) {
  const [touched, setTouched] = useState(false);

  const valid = validation
    ? Object.values(checkValidity(props.value as string, validation)).reduce(
        (a, b) => a && b,
        true
      )
    : true;

  const onChange = props.onChange
    ? (e: ChangeEvent<HTMLSelectElement>) => {
        setTouched(true);
        if (props.onChange) props.onChange(e);
      }
    : () => {
        return;
      };

  return (
    <div className={className ? cn("FormInput", className) : "FormInput"}>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}

      <div
        className={cn(
          "wrapper",
          { "wrapper-auto": props.multiple },
          focusWithin
            ? {
                primary: "focus-within:border-primary",
                secondary: "focus-within:border-secondary",
                accent: "focus-within:border-accent",
              }[focusWithin]
            : "focus-within:border-accent"
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
          <select
            id={props.id || props.name}
            onChange={onChange}
            className="main"
            {...props}
          />

          <div
            className={touched && validation ? "validation" : ""}
            data-testid="validation-icon"
          >
            {touched && validation ? (
              valid ? (
                <TickCircle className="w-4 text-green-500" />
              ) : (
                <Warning2 className="w-4 text-accent" />
              )
            ) : null}
          </div>
        </div>

        {append && <div className="append">{append}</div>}
      </div>
    </div>
  );
}
