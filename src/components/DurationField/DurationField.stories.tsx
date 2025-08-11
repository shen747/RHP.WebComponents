import type { Meta, StoryObj } from '@storybook/react';
import { DurationField } from './DurationField';

const meta: Meta<typeof DurationField> = {
  title: 'Inputs/Duration Field',
  component: DurationField,
};
export default meta;

export const Default: StoryObj<typeof DurationField> = {
  args: { label: 'Duration', value: 135 },
};

