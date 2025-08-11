import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Navigation/Navigation',
  component: Navigation,
};
export default meta;

export const Basic: StoryObj<typeof Navigation> = {
  args: {
    items: [
      { id: 'home', label: 'Home', active: true },
      { id: 'about', label: 'About' },
    ],
  },
};

