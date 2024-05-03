import { Icon } from 'iconsax-react';
import React from 'react';

import { Button } from '..';
import { cn } from '../../../../utils';

export const ButtonIcon = ({
  icon: Icon,
  variant = 'Outline',
  color = 'outline-secondary',
  className,
  ...props
}: React.ComponentProps<typeof Button> & {
  icon: Icon;
  variant?: 'Outline' | 'Bulk';
}) => (
  <Button
    {...props}
    color={color}
    className={cn('!w-auto !h-auto !p-1 !border-none', className)}
  >
    <Icon variant={variant} className="size-5" />
  </Button>
);
