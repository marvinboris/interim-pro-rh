import { RadioGroup as HuiRadioGroup } from '@headlessui/react';
import { Icon } from 'iconsax-react';
import React from 'react';

import { cn } from '../../../../utils';

type RadioGroupProps = Omit<React.ComponentProps<'input'>, 'onChange'> & {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string; icon?: Icon }[];
  label?: React.ReactNode;
};

export function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  ...props
}: RadioGroupProps) {
  return (
    <HuiRadioGroup value={value} onChange={onChange} className="FormInput">
      <input type="hidden" name={name} value={value} />

      {label ? (
        <HuiRadioGroup.Label htmlFor={props.id}>{label}</HuiRadioGroup.Label>
      ) : null}

      <div className="grid grid-cols-2">
        {options.map((option) => (
          <HuiRadioGroup.Option
            key={`radio-group-option-${name}-${option.value}`}
            value={option.value}
            className="cursor-pointer"
          >
            {({ checked }) => (
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'flex-none rounded-full w-4 md:w-5 aspect-square border md:border-[1.5px]',
                    checked
                      ? 'flex items-center justify-center border-orange-500 after:w-2.5 md:after:w-3 after:rounded-full after:aspect-square after:bg-orange-500'
                      : 'border-neutral-gray-300',
                  )}
                />

                {option.icon ? <option.icon className="w-5 h-5" /> : null}

                <span>{option.label}</span>
              </div>
            )}
          </HuiRadioGroup.Option>
        ))}
      </div>
    </HuiRadioGroup>
  );
}

export * from './uncontrolled';
