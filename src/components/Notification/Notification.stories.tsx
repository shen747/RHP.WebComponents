import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Feedback/Notification',
  component: Notification,
};
export default meta;

export const Basic: StoryObj<typeof Notification> = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Notification type="success" title="Saved" onClose={() => setVisible(false)}>
        Changes have been saved.
      </Notification>
    ) : null;
  },
};

