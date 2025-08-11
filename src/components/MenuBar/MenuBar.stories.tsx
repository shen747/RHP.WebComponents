import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';

const meta: Meta<typeof MenuBar> = {
  title: 'Navigation/MenuBar',
  component: MenuBar,
};
export default meta;

export const Basic: StoryObj<typeof MenuBar> = {
  args: {
    items: [
      { id: 'home', label: 'Home', active: true },
      { id: 'about', label: 'About' },
    ],
  },
};

