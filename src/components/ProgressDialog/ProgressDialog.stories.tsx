import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProgressDialog } from './ProgressDialog';
import { Button } from '../Button';

const meta: Meta<typeof ProgressDialog> = {
  title: 'Feedback/ProgressDialog',
  component: ProgressDialog,
};
export default meta;

export const Basic: StoryObj<typeof ProgressDialog> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <ProgressDialog open={open} onOpenChange={setOpen} title="Working...">Please wait</ProgressDialog>
      </div>
    );
  },
};

