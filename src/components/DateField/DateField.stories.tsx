import type { Meta, StoryObj } from '@storybook/react';
import { DateField } from './DateField';

const meta: Meta<typeof DateField> = {
  title: 'Inputs/Date Field',
  component: DateField,
};
export default meta;

export const Default: StoryObj<typeof DateField> = {
  args: { label: 'Date', value: '2024-05-01' },
};

