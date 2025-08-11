import type { Meta, StoryObj } from '@storybook/react';
import { Masthead } from './Masthead';

const meta: Meta<typeof Masthead> = {
  title: 'Layout/Masthead',
  component: Masthead,
};
export default meta;

export const Basic: StoryObj<typeof Masthead> = {
  args: {
    title: 'Page Title',
    actions: <button>Action</button>,
  },
};

