import { Switch as HSwitch } from '@headlessui/react';
import React, { ReactNode } from 'react';

import { cn } from '../../../utils';

type SwitchProps = {
  checked?: boolean;
  className?: string;
  id?: string;
  label?: ReactNode;
  name?: string;
  onChange?: (props?: unknown) => void;
};

export function Switch({
  checked,
  className,
  id,
  label,
  name,
  onChange,
}: SwitchProps) {
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <div>
        <HSwitch
          id={id}
          checked={checked}
          onChange={onChange}
          name={name}
          className={cn(
            checked ? 'bg-secondary' : 'bg-neutral-200',
            `relative inline-flex h-4 lg:h-6 w-8 lg:w-[46px] shrink-0 cursor-pointer rounded-full border lg:border-2 border-transparent transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
            className || '',
          )}
        >
          <span
            aria-hidden="true"
            className={`${
              checked ? 'translate-x-4 lg:translate-x-[22px]' : 'translate-x-0'
            } pointer-events-none inline-block h-3.5 lg:h-5 w-3.5 lg:w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-100 ease-in-out`}
          />
        </HSwitch>
      </div>

      <label htmlFor={id} className="md:w-1/2 text-sm lg:text-base">
        {label}
      </label>
    </div>
  );
}
