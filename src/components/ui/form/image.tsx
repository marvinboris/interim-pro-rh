import { Image } from 'iconsax-react';
import React from 'react';

import { cn } from '../../../utils';

import { Button } from '../buttons';

type InputImageProps = React.ComponentProps<'input'> & { label: string };

export function InputImage({
  label,
  name,
  value,
  className,
  ...props
}: InputImageProps) {
  const onClear = () => {
    document.getElementById('input-image-' + name)?.setAttribute('value', '');
  };

  const onChange = () =>
    document.getElementById(`input-image-${name}`)?.click();

  return (
    <div className={cn('flex flex-col', className || '')} {...props}>
      <div className="text-gray-700 text-sm font-medium">{label}</div>

      <input
        type="file"
        id={`input-image-${name}`}
        name={name}
        className="hidden"
      />

      <div className="flex flex-1 items-cneter gap-4 md:gap-7">
        {value ? (
          <img
            className="w-20 md:w-28 aspect-square rounded-lg border border-neutral-200"
            src={value as string}
            alt={label}
          />
        ) : (
          <Image className="w-20 md:w-28 h-20 md:h-28 rounded-lg border border-neutral-200 p-2 md:p-4 text-primary bg-primary/20" />
        )}

        <div className="flex flex-col gap-2">
          <Button
            onClick={onClear}
            color="outline-accent"
            className="w-20 md:w-[111px] flex-none h-8 md:h-[38px] text-sm md:text-base font-semibold leading-normal"
          >
            Remove
          </Button>

          <Button
            onClick={onChange}
            color="outline-secondary"
            className="w-20 md:w-[111px] flex-none h-8 md:h-[38px] text-sm md:text-base font-semibold leading-normal"
          >
            Change
          </Button>
        </div>
      </div>
    </div>
  );
}
