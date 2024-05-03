import { AddCircle } from "iconsax-react";
import React, { ComponentProps } from "react";

import { useWindowSize } from "../../../../hooks";

import { Button } from "..";

type Props = ComponentProps<typeof Button> & { label?: string };

export function ButtonAdd({
  label,
  color = "outline-secondary",
  ...props
}: Props) {
  const { width } = useWindowSize();

  return (
    <Button color={color} size={width && width > 768 ? "md" : "sm"} {...props}>
      <AddCircle className="size-4 md:size-5 flex-none" />
      <span>{label || "Add"}</span>
    </Button>
  );
}
