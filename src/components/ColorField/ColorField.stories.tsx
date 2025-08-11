import type { Meta, StoryObj } from '@storybook/react';
import { ColorField } from './ColorField';

const meta: Meta<typeof ColorField> = {
  title: 'Inputs/Color Field',
  component: ColorField,
};
export default meta;

export const Default: StoryObj<typeof ColorField> = {
  args: { label: 'Color', value: '#336699' },
};

