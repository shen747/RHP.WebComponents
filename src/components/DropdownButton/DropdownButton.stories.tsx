import type { Meta, StoryObj } from '@storybook/react';
import { DropdownButton } from './DropdownButton';

const meta: Meta<typeof DropdownButton> = {
  title: 'Inputs/Dropdown Button',
  component: DropdownButton,
};
export default meta;

export const Default: StoryObj<typeof DropdownButton> = {
  render: () => (
    <DropdownButton items={[{ id: 1, label: 'Action 1' }, { id: 2, label: 'Action 2' }]}>
      Open menu
    </DropdownButton>
  ),
};

