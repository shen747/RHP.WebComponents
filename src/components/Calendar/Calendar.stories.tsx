import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Data Display/Calendar',
  component: Calendar,
};
export default meta;

export const Default: StoryObj<typeof Calendar> = {
  args: {},
};

