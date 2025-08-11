import type { Meta, StoryObj } from '@storybook/react';
import { EntityActions } from './EntityActions';

const meta: Meta<typeof EntityActions> = {
  title: 'Data Display/Entity Actions',
  component: EntityActions,
};
export default meta;

export const Default: StoryObj<typeof EntityActions> = {
  args: {
    actions: [
      { id: 'edit', label: 'Edit' },
      { id: 'delete', label: 'Delete' },
    ],
  },
};

