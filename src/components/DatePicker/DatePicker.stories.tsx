import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Inputs/Date Picker',
  component: DatePicker,
};
export default meta;

export const Default: StoryObj<typeof DatePicker> = {
  args: { value: '2024-01-31' },
};

