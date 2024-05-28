import React from "react";

export function FormSteps({
  options,
  active,
}: {
  options: React.ReactNode[];
  active: number;
}) {
  return options.map((option, index) =>
    active === index + 1 ? (
      option
    ) : (
      <div className="absolute opacity-0 inset-0 -z-10">{option}</div>
    )
  );
}
