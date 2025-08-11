import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AlertModal } from './AlertModal';
import { Button } from '../Button';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
};
export default meta;

export const Default: StoryObj<typeof AlertModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AlertModal
          open={open}
          title="Delete item"
          message="Are you sure you want to delete this item? This action cannot be undone."
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    );
  },
};

