import { Transition as HuiTransition } from "@headlessui/react";
import React from "react";

export function Transition(
  props: React.ComponentProps<typeof HuiTransition> & { show?: boolean }
) {
  return (
    <HuiTransition
      show={props.show}
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {props.children}
    </HuiTransition>
  );
}
