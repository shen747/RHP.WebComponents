import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SegmentedControl, SegmentedControlButton } from './';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    docs: {
      description: {
        component: 'A segmented control component that allows single or multiple selection of options.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option1');
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Single Selection</h3>
        <p>Selected: {value}</p>
        <SegmentedControl value={value} onChange={setValue}>
          <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
          <SegmentedControlButton value="option2">Option 2</SegmentedControlButton>
          <SegmentedControlButton value="option3">Option 3</SegmentedControlButton>
        </SegmentedControl>
      </div>
    );
  }
};

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>(['option1']);
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Multiple Selection</h3>
        <p>Selected: {JSON.stringify(values)}</p>
        <SegmentedControl value={values} onChange={setValues} multiple>
          <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
          <SegmentedControlButton value="option2">Option 2</SegmentedControlButton>
          <SegmentedControlButton value="option3">Option 3</SegmentedControlButton>
          <SegmentedControlButton value="option4">Option 4</SegmentedControlButton>
        </SegmentedControl>
      </div>
    );
  }
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState<string>('list');
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>With Icons</h3>
        <p>Selected: {value}</p>
        <SegmentedControl value={value} onChange={setValue}>
          <SegmentedControlButton value="list" leadingIcon="a-icon-list">List</SegmentedControlButton>
          <SegmentedControlButton value="grid" leadingIcon="a-icon-grid">Grid</SegmentedControlButton>
          <SegmentedControlButton value="card" leadingIcon="a-icon-card">Card</SegmentedControlButton>
        </SegmentedControl>
      </div>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    const [value, setValue] = useState<string>('medium');
    
    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h4>Small</h4>
          <SegmentedControl value={value} onChange={setValue}>
            <SegmentedControlButton value="small" size="s">Small</SegmentedControlButton>
            <SegmentedControlButton value="medium" size="s">Medium</SegmentedControlButton>
            <SegmentedControlButton value="large" size="s">Large</SegmentedControlButton>
          </SegmentedControl>
        </div>
        
        <div>
          <h4>Medium (Default)</h4>
          <SegmentedControl value={value} onChange={setValue}>
            <SegmentedControlButton value="small">Small</SegmentedControlButton>
            <SegmentedControlButton value="medium">Medium</SegmentedControlButton>
            <SegmentedControlButton value="large">Large</SegmentedControlButton>
          </SegmentedControl>
        </div>
        
        <div>
          <h4>Large</h4>
          <SegmentedControl value={value} onChange={setValue}>
            <SegmentedControlButton value="small" size="l">Small</SegmentedControlButton>
            <SegmentedControlButton value="medium" size="l">Medium</SegmentedControlButton>
            <SegmentedControlButton value="large" size="l">Large</SegmentedControlButton>
          </SegmentedControl>
        </div>
      </div>
    );
  }
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('option1');
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Disabled Options</h3>
        <p>Selected: {value}</p>
        <SegmentedControl value={value} onChange={setValue}>
          <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
          <SegmentedControlButton value="option2" disabled>Option 2 (Disabled)</SegmentedControlButton>
          <SegmentedControlButton value="option3">Option 3</SegmentedControlButton>
        </SegmentedControl>
      </div>
    );
  }
};
