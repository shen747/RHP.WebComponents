import type { Meta, StoryObj } from '@storybook/react';
import { Main } from './Main';

const meta: Meta<typeof Main> = {
  title: 'Layout/Main',
  component: Main,
};
export default meta;

export const Basic: StoryObj<typeof Main> = {
  args: {
    children: 'Main content',
  },
};

