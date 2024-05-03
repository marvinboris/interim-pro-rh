import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

import { EnumStatus } from '../../../enums';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'accent',
          'outline-primary',
          'outline-secondary',
          'outline-accent',
          'white',
          'light',
          'red',
          'outline-red',
          'slate',
          'link',
          'link-secondary',
          'link-accent',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    status: {
      control: {
        type: 'select',
        options: [undefined, EnumStatus.LOADING],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Button',
  },
};
