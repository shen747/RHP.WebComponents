import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircular } from './ProgressCircular';

const meta: Meta<typeof ProgressCircular> = {
  title: 'Feedback/ProgressCircular',
  component: ProgressCircular,
};
export default meta;

export const Basic: StoryObj<typeof ProgressCircular> = {
  args: { value: 50, size: 48 },
};

export const Indeterminate: StoryObj<typeof ProgressCircular> = {
  args: { indeterminate: true, size: 48 },
};

