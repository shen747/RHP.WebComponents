import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button';

const meta: Meta<typeof Drawer> = {
  title: 'Navigation/Drawer',
  component: Drawer,
};
export default meta;

export const Default: StoryObj<typeof Drawer> = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onOpenChange={setOpen} title="Menu">
          Drawer content here
        </Drawer>
      </div>
    );
  },
};

