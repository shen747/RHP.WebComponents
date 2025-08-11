import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

const meta: Meta<typeof Chart> = {
  title: 'Data Display/Chart (stub)',
  component: Chart,
};
export default meta;

export const Default: StoryObj<typeof Chart> = {
  args: {},
};

export const Loading: StoryObj<typeof Chart> = {
  args: { loading: true },
};

