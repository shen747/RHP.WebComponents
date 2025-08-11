import type { Meta, StoryObj } from '@storybook/react';
import { DropdownIconButton } from './DropdownIconButton';

const meta: Meta<typeof DropdownIconButton> = {
  title: 'Inputs/Dropdown IconButton',
  component: DropdownIconButton,
};
export default meta;

export const Default: StoryObj<typeof DropdownIconButton> = {
  args: {
    icon: 'a-icon-more-vert',
    items: [
      { id: 1, label: 'Edit' },
      { id: 2, label: 'Delete' },
    ],
    ariaLabel: 'More',
  },
};

