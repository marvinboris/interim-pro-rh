import React from "react";

type FlagProps = Omit<React.ComponentProps<"img">, "src" | "alt"> & {
  code: string;
  size?: "1x1" | "4x3";
};

export function Flag({ code, size = "4x3", ...props }: FlagProps) {
  return (
    <img
      src={`/images/flags/${size}/${code}.svg`}
      alt={`Flag - ${code}`}
      {...props}
    />
  );
}
