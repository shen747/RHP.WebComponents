import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from './Toast';
import { Button } from '../Button';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
};
export default meta;

export const Basic: StoryObj<typeof Toast> = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Toast
        sentiment="info"
        title="Toast title"
        description="Optional description for additional context"
        actionLink="https://example.com"
        actionText="Action"
        timeout={8000}
        open={open}
        onOpenChange={setOpen}
        activator={({ props }) => (
          <Button {...props}>Open Toast</Button>
        )}
      />
    );
  },
};

