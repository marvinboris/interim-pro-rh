import type { Meta, StoryObj } from '@storybook/react';
import { Man, Woman } from 'iconsax-react';

import { RadioGroup } from './radio-group';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/UI/Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Gender',
    name: 'gender',
    value: 'male',
    onChange: () => {},
    options: [
      { value: 'male', label: 'Male', icon: Man },
      { value: 'female', label: 'Female', icon: Woman },
    ],
  },
};
