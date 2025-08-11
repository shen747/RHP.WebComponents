import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
};
export default meta;

export const Basic: StoryObj<typeof Modal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal open={open} onOpenChange={setOpen} title="Hello" actions={<Button onClick={() => setOpen(false)}>Close</Button>}>
          Content
        </Modal>
      </div>
    );
  },
};

