import type { Meta, StoryObj } from '@storybook/react';
import { Flag } from './Flag';

const meta: Meta<typeof Flag> = {
  title: 'Data Display/Flag',
  component: Flag,
};
export default meta;

export const Default: StoryObj<typeof Flag> = {
  args: { label: '🇺🇸 United States' },
};

