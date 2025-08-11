import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../Button';

const meta: Meta<typeof BottomSheet> = {
  title: 'Utilities/BottomSheet',
  component: BottomSheet,
};
export default meta;

export const Default: StoryObj<typeof BottomSheet> = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <BottomSheet open={open} onOpenChange={setOpen}>
          <div style={{ height: 180 }}>Content</div>
        </BottomSheet>
      </div>
    );
  },
};

