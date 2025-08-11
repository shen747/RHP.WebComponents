import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NavigationDrawer } from './NavigationDrawer';
import { Button } from '../Button';

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Navigation/NavigationDrawer',
  component: NavigationDrawer,
};
export default meta;

export const Basic: StoryObj<typeof NavigationDrawer> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <NavigationDrawer open={open} onOpenChange={setOpen} title="Menu">Content</NavigationDrawer>
      </div>
    );
  }
};

