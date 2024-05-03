import React, { ChangeEvent, ReactNode, useState } from "react";

import { Validation } from "../../../@types/validation";
import { checkValidity, cn } from "../../../utils";
import { TickCircle, Warning2 } from "iconsax-react";

type TextAreaProps = React.ComponentProps<"textarea"> & {
  label?: ReactNode;
  validation?: Validation;
  focusWithin?: "primary" | "secondary" | "accent";
};

export function TextArea({
  label,
  validation,
  className,
  focusWithin,
  ...props
}: TextAreaProps) {
  const [touched, setTouched] = useState(false);

  const valid = validation
    ? Object.values(checkValidity(props.value as string, validation)).reduce(
        (a, b) => a && b,
        true
      )
    : true;

  const onChange = props.onChange
    ? (e: ChangeEvent<HTMLTextAreaElement>) => {
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
          "wrapper wrapper-auto",
          focusWithin
            ? {
                primary: "focus-within:border-primary",
                secondary: "focus-within:border-secondary",
                accent: "focus-within:border-accent",
              }[focusWithin]
            : "focus-within:border-accent"
        )}
      >
        <div
          className={cn(
            validation ? "pr-8 md:pr-10" : "pr-4 md:pr-5",
            "content py-1.5 md:py-2.5 pl-4 md:pl-5"
          )}
        >
          <textarea
            {...props}
            id={props.id || props.name}
            className="main"
            data-testid="textarea"
            onChange={onChange}
          />

          <div
            className={touched && validation ? "validation" : ""}
            data-testid="validation-icon"
          >
            {touched && validation ? (
              valid ? (
                <TickCircle className="w-4 text-secondary" />
              ) : (
                <Warning2 className="w-4 text-accent" />
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
