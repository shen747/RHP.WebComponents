import type { Meta, StoryObj } from '@storybook/react';
import { Notifications } from './Notifications';

const meta: Meta<typeof Notifications> = {
  title: 'Feedback/Notifications',
  component: Notifications,
};
export default meta;

export const Basic: StoryObj<typeof Notifications> = {
  args: {
    items: [
      { id: '1', type: 'info', title: 'Info', children: 'Information' } as any,
      { id: '2', type: 'error', title: 'Error', children: 'Something failed' } as any,
    ],
  },
};

