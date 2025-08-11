import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Layout/Panel',
  component: Panel,
};
export default meta;

export const Basic: StoryObj<typeof Panel> = {
  args: {
    caption: 'Panel caption',
    children: 'Panel content',
  },
};

