import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from '.';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'Tooltip text',
    placement: 'bottom',
    openOnHover: true,
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'] },
    openOnHover: { control: 'boolean' },
    openOnClick: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

export const Hover: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Click: StoryObj<typeof Tooltip> = {
  args: { openOnHover: false, openOnClick: true },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Click me</Button>
    </Tooltip>
  ),
};

