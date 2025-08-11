import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, Tab, TabsWindow, TabsWindowItem } from './Tabs';
import { Button } from '../Button';
import { TextField } from '../TextField';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced Tabs component with alignment, mobile support, badges, and content panels.'
      }
    }
  },
  argTypes: {
    alignTabs: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'Alignment of tabs'
    },
    mobile: {
      control: { type: 'boolean' },
      description: 'Mobile-friendly layout'
    }
  }
};
export default meta;

export const Basic: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
      { id: 'three', label: 'Three' }
    ]
  },
  render: (args) => (
    <Tabs {...args}>
      <div style={{ padding: '20px' }}>
        <h3>Content for current tab goes here.</h3>
        <p>This is the basic tabs example with items prop.</p>
      </div>
    </Tabs>
  )
};

export const WithBadges: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { id: 'one', label: 'One', badge: { type: 'info', count: 3 } },
      { id: 'two', label: 'Two', badge: { type: 'success', count: 5 } },
      { id: 'three', label: 'Three', badge: { type: 'warning', count: 2 } },
      { id: 'four', label: 'Four', badge: { type: 'error', count: 1 } }
    ]
  },
  render: (args) => (
    <Tabs {...args}>
      <div style={{ padding: '20px' }}>
        <h3>Content for current tab goes here.</h3>
        <p>This example shows tabs with badges indicating counts or status.</p>
      </div>
    </Tabs>
  )
};

export const WithDisabledTabs: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two', disabled: true },
      { id: 'three', label: 'Three' },
      { id: 'four', label: 'Four', disabled: true }
    ]
  },
  render: (args) => (
    <Tabs {...args}>
      <div style={{ padding: '20px' }}>
        <h3>Content for current tab goes here.</h3>
        <p>This example shows tabs with disabled states.</p>
      </div>
    </Tabs>
  )
};

export const DifferentAlignments: StoryObj<typeof Tabs> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <div>
        <h4>Start Alignment (Default)</h4>
        <Tabs 
          items={[
            { id: 'one', label: 'One' },
            { id: 'two', label: 'Two' },
            { id: 'three', label: 'Three' }
          ]}
          alignTabs="start"
        >
          <div style={{ padding: '20px' }}>
            <p>Content for start-aligned tabs.</p>
          </div>
        </Tabs>
      </div>

      <div>
        <h4>Center Alignment</h4>
        <Tabs 
          items={[
            { id: 'one', label: 'One' },
            { id: 'two', label: 'Two' },
            { id: 'three', label: 'Three' }
          ]}
          alignTabs="center"
        >
          <div style={{ padding: '20px' }}>
            <p>Content for center-aligned tabs.</p>
          </div>
        </Tabs>
      </div>

      <div>
        <h4>End Alignment</h4>
        <Tabs 
          items={[
            { id: 'one', label: 'One' },
            { id: 'two', label: 'Two' },
            { id: 'three', label: 'Three' }
          ]}
          alignTabs="end"
        >
          <div style={{ padding: '20px' }}>
            <p>Content for end-aligned tabs.</p>
          </div>
        </Tabs>
      </div>
    </div>
  )
};

export const MobileLayout: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { id: 'one', label: 'One' },
      { id: 'two', label: 'Two' },
      { id: 'three', label: 'Three' }
    ],
    mobile: true
  },
  render: (args) => (
    <Tabs {...args}>
      <div style={{ padding: '20px' }}>
        <h3>Mobile-friendly tabs</h3>
        <p>This example shows the mobile layout with rounded tabs and different styling.</p>
      </div>
    </Tabs>
  )
};

export const WithContentPanels: StoryObj<typeof Tabs> = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('one');
    
    return (
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tab value="one">Tab One</Tab>
        <Tab value="two" badge={{ type: 'info', count: 3 }}>Tab Two</Tab>
        <Tab value="three" disabled>Tab Three</Tab>
        
        <TabsWindow value={activeTab} onChange={setActiveTab}>
          <TabsWindowItem value="one">
            <div style={{ padding: '20px' }}>
              <h3>Content for Tab One</h3>
              <p>This is the content for the first tab.</p>
              <Button>Action in Tab One</Button>
            </div>
          </TabsWindowItem>
          
          <TabsWindowItem value="two">
            <div style={{ padding: '20px' }}>
              <h3>Content for Tab Two</h3>
              <p>This tab has a badge and contains a form.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <TextField label="Name" />
                <TextField label="Email" type="email" />
                <Button>Submit</Button>
              </div>
            </div>
          </TabsWindowItem>
          
          <TabsWindowItem value="three">
            <div style={{ padding: '20px' }}>
              <h3>Content for Tab Three</h3>
              <p>This tab is disabled and should not be accessible.</p>
            </div>
          </TabsWindowItem>
        </TabsWindow>
      </Tabs>
    );
  }
};

export const FitToHeight: StoryObj<typeof Tabs> = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('one');
    
    return (
      <div style={{ height: '400px', border: '1px solid #ccc', display: 'flex', flexDirection: 'column' }}>
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tab value="one">Tab One</Tab>
          <Tab value="two">Tab Two</Tab>
          
          <TabsWindow value={activeTab} onChange={setActiveTab}>
            <TabsWindowItem value="one" fitToHeight>
              <div style={{ 
                padding: '20px', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'var(--s-neutral-bg-weak-default)'
              }}>
                <h3>Tab One - Fit to Height</h3>
                <p>This content area fills the available height.</p>
                <div style={{ flex: 1, background: 'var(--s-neutral-bg-default)', padding: '20px', marginTop: '20px' }}>
                  <p>This area takes up the remaining space.</p>
                  <p>You can put any content here that needs to fill the available height.</p>
                </div>
              </div>
            </TabsWindowItem>
            
            <TabsWindowItem value="two" fitToHeight>
              <div style={{ 
                padding: '20px', 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                background: 'var(--s-neutral-bg-weak-default)'
              }}>
                <h3>Tab Two - Fit to Height</h3>
                <p>This content area also fills the available height.</p>
                <div style={{ flex: 1, background: 'var(--s-neutral-bg-default)', padding: '20px', marginTop: '20px' }}>
                  <p>This area takes up the remaining space.</p>
                  <p>Perfect for data tables or forms that need to fill the container.</p>
                </div>
              </div>
            </TabsWindowItem>
          </TabsWindow>
        </Tabs>
      </div>
    );
  }
};

export const Interactive: StoryObj<typeof Tabs> = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState('one');
    const [count, setCount] = React.useState(0);
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Interactive Tabs</h3>
        <p>Active tab: {activeTab}</p>
        <p>Button clicked {count} times</p>
        
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tab value="one">Tab One</Tab>
          <Tab value="two">Tab Two</Tab>
          <Tab value="three">Tab Three</Tab>
          
          <TabsWindow value={activeTab} onChange={setActiveTab}>
            <TabsWindowItem value="one">
              <div style={{ padding: '20px' }}>
                <h4>Tab One Content</h4>
                <p>This is the content for tab one.</p>
                <Button onClick={() => setCount(prev => prev + 1)}>
                  Click me ({count})
                </Button>
              </div>
            </TabsWindowItem>
            
            <TabsWindowItem value="two">
              <div style={{ padding: '20px' }}>
                <h4>Tab Two Content</h4>
                <p>This is the content for tab two.</p>
                <Button onClick={() => setCount(prev => prev + 1)}>
                  Click me ({count})
                </Button>
              </div>
            </TabsWindowItem>
            
            <TabsWindowItem value="three">
              <div style={{ padding: '20px' }}>
                <h4>Tab Three Content</h4>
                <p>This is the content for tab three.</p>
                <Button onClick={() => setCount(prev => prev + 1)}>
                  Click me ({count})
                </Button>
              </div>
            </TabsWindowItem>
          </TabsWindow>
        </Tabs>
      </div>
    );
  }
};

