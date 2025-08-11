import type { Meta, StoryObj } from '@storybook/react';
import { Expander } from './Expander';

const meta: Meta<typeof Expander> = {
  title: 'Data Display/Expander',
  component: Expander,
};
export default meta;

export const Default: StoryObj<typeof Expander> = {
  render: () => (
    <Expander title="Details" defaultOpen>
      Hidden content goes here
    </Expander>
  ),
};

