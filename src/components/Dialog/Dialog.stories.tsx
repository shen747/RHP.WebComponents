import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dialog } from './Dialog';
import { Button } from '../Button';
import { TextField } from '../TextField';

const meta: Meta<typeof Dialog> = {
  title: 'Feedback/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced Dialog component with size variants, fullscreen mode, focus management, and improved accessibility.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['', 'm', 'l', 'xl'],
      description: 'Predefined size variants'
    },
    fullscreen: {
      control: { type: 'boolean' },
      description: 'Show dialog in fullscreen mode'
    },
    persistent: {
      control: { type: 'boolean' },
      description: 'Prevent closing when clicking outside or pressing escape'
    },
    scrollable: {
      control: { type: 'boolean' },
      description: 'Make content scrollable'
    }
  }
};
export default meta;

export const Default: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="Dialog Title" 
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>This is the default dialog content. It can contain any React components.</p>
        </Dialog>
      </div>
    );
  }
};

export const SizeVariants: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpen('m')}>Small (M)</Button>
        <Button onClick={() => setOpen('l')}>Large (L)</Button>
        <Button onClick={() => setOpen('xl')}>Extra Large (XL)</Button>
        
        {['m', 'l', 'xl'].map(size => (
          <Dialog 
            key={size}
            open={open === size} 
            onOpenChange={(isOpen) => setOpen(isOpen ? size : null)} 
            title={`${size.toUpperCase()} Size Dialog`}
            size={size as any}
            actions={
              <>
                <Button variant="ghost" onClick={() => setOpen(null)}>Cancel</Button>
                <Button onClick={() => setOpen(null)}>Confirm</Button>
              </>
            }
          >
            <p>This is a {size.toUpperCase()} sized dialog.</p>
            <p>Size: {size === 'm' ? '780px × 60vh' : size === 'l' ? '1200px × 90vh' : '90vw × 90vh'}</p>
          </Dialog>
        ))}
      </div>
    );
  }
};

export const FullscreenDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Fullscreen Dialog</Button>
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="Fullscreen Dialog" 
          fullscreen={true}
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </>
          }
        >
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>This is a fullscreen dialog that takes up the entire viewport.</p>
            <p>It's useful for complex forms or detailed content that needs maximum space.</p>
            <div style={{ flex: 1, background: 'var(--s-neutral-bg-weak-default)', padding: '20px', borderRadius: 'var(--s-radius-m)' }}>
              <h3>Content Area</h3>
              <p>This area can contain forms, tables, or any other content that needs space.</p>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
};

export const PersistentDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Persistent Dialog</Button>
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="Persistent Dialog" 
          persistent={true}
          actions={
            <Button onClick={() => setOpen(false)}>I Understand</Button>
          }
        >
          <p>This dialog cannot be closed by clicking outside or pressing Escape.</p>
          <p>You must click the "I Understand" button to close it.</p>
        </Dialog>
      </div>
    );
  }
};

export const ScrollableDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Scrollable Dialog</Button>
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="Scrollable Dialog" 
          scrollable={true}
          height="400px"
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </>
          }
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} style={{ marginBottom: '20px', padding: '10px', background: 'var(--s-neutral-bg-weak-default)', borderRadius: 'var(--s-radius-s)' }}>
              <h4>Section {i + 1}</h4>
              <p>This is content for section {i + 1}. The dialog content is scrollable when it exceeds the available height.</p>
            </div>
          ))}
        </Dialog>
      </div>
    );
  }
};

export const FormDialog: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({ name: '', email: '' });
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Form Dialog</Button>
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="User Information" 
          size="m"
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => {
                console.log('Form data:', formData);
                setOpen(false);
              }}>Save</Button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
        </Dialog>
      </div>
    );
  }
};

export const WithActivator: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <Dialog 
        open={open} 
        onOpenChange={setOpen} 
        title="Dialog with Activator" 
        activator={<Button>Click to Open</Button>}
        actions={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>This dialog uses an activator prop to render the trigger button.</p>
      </Dialog>
    );
  }
};

export const CustomDimensions: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Custom Size Dialog</Button>
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="Custom Dimensions" 
          width="600px"
          height="400px"
          minWidth="400px"
          maxWidth="800px"
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>This dialog has custom width and height dimensions.</p>
          <p>Width: 600px, Height: 400px</p>
          <p>Min Width: 400px, Max Width: 800px</p>
        </Dialog>
      </div>
    );
  }
};

export const Interactive: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(0);
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Interactive Dialog</h3>
        <p>Dialog is {open ? 'open' : 'closed'}</p>
        <p>Button clicked {count} times</p>
        
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        
        <Dialog 
          open={open} 
          onOpenChange={setOpen} 
          title="Interactive Dialog" 
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
              <Button onClick={() => {
                setCount(prev => prev + 1);
                console.log('Button clicked!');
              }}>Click Me ({count})</Button>
            </>
          }
        >
          <p>This dialog demonstrates interactive functionality.</p>
          <p>Try clicking the button in the actions area to see the counter increase.</p>
        </Dialog>
      </div>
    );
  }
};

