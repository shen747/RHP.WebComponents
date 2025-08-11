import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from './Sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Layout/Sheet',
  component: Sheet,
};
export default meta;

export const Basic: StoryObj<typeof Sheet> = {
  args: {
    children: 'Sheet content',
  },
};

