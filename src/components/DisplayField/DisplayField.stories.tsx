import type { Meta, StoryObj } from '@storybook/react';
import { DisplayField } from './DisplayField';

const meta: Meta<typeof DisplayField> = {
  title: 'Data Display/Display Field',
  component: DisplayField,
};
export default meta;

export const Default: StoryObj<typeof DisplayField> = {
  args: { label: 'Order ID', value: '12345' },
};

