import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
};
export default meta;

export const Default: StoryObj<typeof Footer> = {
  args: {
    copyright: '© 2025 Example',
    links: [
      { id: 1, label: 'Privacy', href: '#' },
      { id: 2, label: 'Terms', href: '#' },
    ],
  },
};

