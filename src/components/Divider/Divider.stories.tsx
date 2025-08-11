import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};
export default meta;

export const Horizontal: StoryObj<typeof Divider> = {
  args: {},
};

export const Vertical: StoryObj<typeof Divider> = {
  args: { orientation: 'vertical', style: { height: 120 } },
};

export const Inset: StoryObj<typeof Divider> = {
  args: { inset: true },
};

