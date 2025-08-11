import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Components/Spacer',
  component: Spacer,
};
export default meta;

export const Horizontal: StoryObj<typeof Spacer> = {
  args: { direction: 'horizontal', size: 'm' },
};

export const Vertical: StoryObj<typeof Spacer> = {
  args: { direction: 'vertical', size: 'm' },
};

