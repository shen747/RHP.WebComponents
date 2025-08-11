import type { Meta, StoryObj } from '@storybook/react';
import { DateTimeField } from './DateTimeField';

const meta: Meta<typeof DateTimeField> = {
  title: 'Inputs/DateTime Field',
  component: DateTimeField,
};
export default meta;

export const Default: StoryObj<typeof DateTimeField> = {
  args: { label: 'DateTime', value: '2024-05-01T14:00' },
};

