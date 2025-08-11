import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';
import { Button } from '../Button';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
};
export default meta;

export const Default: StoryObj<typeof AppBar> = {
  args: {
    title: 'Page title',
    start: <Button variant="ghost">Back</Button>,
    end: <Button variant="ghost">Actions</Button>,
  },
};

