import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Popover } from './Popover';
import { Button } from '../Button';

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
};
export default meta;

export const Basic: StoryObj<typeof Popover> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(o => !o)}>Toggle</Button>
        <Popover open={open} onOpenChange={setOpen}>Content</Popover>
      </div>
    );
  },
};

