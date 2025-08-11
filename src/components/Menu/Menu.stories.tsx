import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Menu } from './Menu';
import { Button } from '../Button';
import { Icon } from '../Icon';

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced Menu component with positioning, elevation, hover support, fullscreen mode, and improved accessibility.'
      }
    }
  },
  argTypes: {
    anchor: {
      control: { type: 'select' },
      options: ['top left', 'top right', 'bottom left', 'bottom right', 'center'],
      description: 'Anchor position for the menu'
    },
    elevation: {
      control: { type: 'select' },
      options: ['100', '200', '300'],
      description: 'Elevation level (shadow depth)'
    },
    openOnHover: {
      control: { type: 'boolean' },
      description: 'Open menu on hover instead of click'
    },
    fullscreen: {
      control: { type: 'boolean' },
      description: 'Show menu in fullscreen mode (mobile)'
    }
  }
};
export default meta;

export const Basic: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'One' },
      { id: '2', label: 'Two' },
    ],
    activator: <Button>Open Menu</Button>
  }
};

export const WithIcons: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'Edit', icon: 'a-icon-edit' },
      { id: '2', label: 'Delete', icon: 'a-icon-delete' },
      { id: '3', label: 'Share', icon: 'a-icon-share' },
    ],
    activator: <Button>Actions</Button>
  }
};

export const WithDividers: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'New File' },
      { id: '2', label: 'Open File' },
      { id: '3', label: 'Save' },
      { id: 'divider1', divider: true },
      { id: '4', label: 'Export' },
      { id: '5', label: 'Print' },
      { id: 'divider2', divider: true },
      { id: '6', label: 'Exit' },
    ],
    activator: <Button>File Menu</Button>
  }
};

export const WithDisabledItems: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'Enabled Item' },
      { id: '2', label: 'Disabled Item', disabled: true },
      { id: '3', label: 'Another Enabled Item' },
    ],
    activator: <Button>Menu with Disabled</Button>
  }
};

export const HoverMenu: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'Hover Item 1' },
      { id: '2', label: 'Hover Item 2' },
      { id: '3', label: 'Hover Item 3' },
    ],
    openOnHover: true,
    closeDelay: 300,
    activator: <Button>Hover Me</Button>
  }
};

export const DifferentAnchors: StoryObj<typeof Menu> = {
  render: () => (
    <div style={{ padding: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <Menu
        items={[{ id: '1', label: 'Top Left' }]}
        anchor="top left"
        activator={<Button>Top Left</Button>}
      />
      <Menu
        items={[{ id: '1', label: 'Top Right' }]}
        anchor="top right"
        activator={<Button>Top Right</Button>}
      />
      <Menu
        items={[{ id: '1', label: 'Bottom Left' }]}
        anchor="bottom left"
        activator={<Button>Bottom Left</Button>}
      />
      <Menu
        items={[{ id: '1', label: 'Bottom Right' }]}
        anchor="bottom right"
        activator={<Button>Bottom Right</Button>}
      />
    </div>
  )
};

export const DifferentElevations: StoryObj<typeof Menu> = {
  render: () => (
    <div style={{ padding: '100px', display: 'flex', gap: '20px' }}>
      <Menu
        items={[{ id: '1', label: 'Elevation 100' }]}
        elevation="100"
        activator={<Button>Elevation 100</Button>}
      />
      <Menu
        items={[{ id: '1', label: 'Elevation 200' }]}
        elevation="200"
        activator={<Button>Elevation 200</Button>}
      />
      <Menu
        items={[{ id: '1', label: 'Elevation 300' }]}
        elevation="300"
        activator={<Button>Elevation 300</Button>}
      />
    </div>
  )
};

export const FullscreenMenu: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'Fullscreen Item 1' },
      { id: '2', label: 'Fullscreen Item 2' },
      { id: '3', label: 'Fullscreen Item 3' },
    ],
    fullscreen: true,
    activator: <Button>Fullscreen Menu</Button>
  }
};

export const CustomContent: StoryObj<typeof Menu> = {
  args: {
    activator: <Button>Custom Content</Button>,
    children: (
      <div className="rhp-menu__container">
        <div className="rhp-menu__title">Custom Menu Title</div>
        <div className="rhp-menu__content">
          <div style={{ padding: 'var(--s-padding-xl)' }}>
            <p>This is custom content inside the menu.</p>
            <p>You can put any React components here.</p>
          </div>
        </div>
        <div className="rhp-menu__actions">
          <Button variant="ghost" size="small">Cancel</Button>
          <Button size="small">Save</Button>
        </div>
      </div>
    )
  }
};

export const PersistentMenu: StoryObj<typeof Menu> = {
  args: {
    items: [
      { id: '1', label: 'Persistent Item 1' },
      { id: '2', label: 'Persistent Item 2' },
    ],
    persistent: true,
    activator: <Button>Persistent Menu</Button>
  }
};

export const Interactive: StoryObj<typeof Menu> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Interactive Menu</h3>
        <p>Menu is {open ? 'open' : 'closed'}</p>
        
        <Menu
          open={open}
          onOpenChange={setOpen}
          items={[
            { id: '1', label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
            { id: '2', label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
            { id: '3', label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
          ]}
          activator={<Button>Controlled Menu</Button>}
        />
        
        <div style={{ marginTop: '20px' }}>
          <Button onClick={() => setOpen(true)}>Open Menu</Button>
          <Button onClick={() => setOpen(false)}>Close Menu</Button>
        </div>
      </div>
    );
  }
};

