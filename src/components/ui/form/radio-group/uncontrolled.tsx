import React from 'react';
import { RadioGroup } from '.';

export function UncontrolledRadioGroup(
  props: Omit<React.ComponentProps<typeof RadioGroup>, 'value' | 'onChange'>,
) {
  const [value, setValue] = React.useState('');

  return <RadioGroup {...props} value={value} onChange={setValue} />;
}
