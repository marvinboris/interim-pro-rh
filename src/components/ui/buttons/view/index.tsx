import { ExportSquare } from "iconsax-react";
import React, { ComponentProps } from "react";

import { useWindowSize } from "../../../../hooks";

import { Button } from "..";

type Props = ComponentProps<typeof Button> & {
  label?: string;
  untitled?: boolean;
};

export function ButtonView({
  label,
  color = "link-secondary",
  untitled,
  ...props
}: Props) {
  const { width } = useWindowSize();

  return (
    <Button color={color} size={width && width > 768 ? "md" : "sm"} {...props}>
      {untitled ? null : <span className="underline">{label || "View"}</span>}
      <ExportSquare className="w-4 md:w-5 h-4 md:h-5" />
    </Button>
  );
}
