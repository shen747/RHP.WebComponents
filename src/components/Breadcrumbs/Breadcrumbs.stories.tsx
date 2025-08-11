import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};
export default meta;

const items = [
  { caption: 'Home', href: '#' },
  { caption: 'Section', href: '#' },
  { caption: 'Subsection', href: '#' },
  { caption: 'Current' },
];

export const Default: StoryObj<typeof Breadcrumbs> = {
  args: {
    items,
  },
};

export const ThreeItems: StoryObj<typeof Breadcrumbs> = {
  args: {
    items: items.slice(0, 3),
  },
};

export const Mobile: StoryObj<typeof Breadcrumbs> = {
  args: {
    items,
    isMobile: true,
  },
};

