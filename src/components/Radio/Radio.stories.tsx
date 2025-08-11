import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  args: { label: 'Option', name: 'group1' },
};
export default meta;

export const Basic: StoryObj<typeof Radio> = {};

