import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressLinear } from './ProgressLinear';

const meta: Meta<typeof ProgressLinear> = {
  title: 'Feedback/ProgressLinear',
  component: ProgressLinear,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced ProgressLinear component with colors, reverse direction, absolute positioning, and improved animations.'
      }
    }
  },
  argTypes: {
    location: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: 'Location when using absolute positioning'
    }
  }
};
export default meta;

export const Basic: StoryObj<typeof ProgressLinear> = {
  args: { value: 70, height: 6 },
};

export const Indeterminate: StoryObj<typeof ProgressLinear> = {
  args: { indeterminate: true },
};

export const DifferentHeights: StoryObj<typeof ProgressLinear> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <p>Height: 2px</p>
        <ProgressLinear value={30} height={2} />
      </div>
      <div>
        <p>Height: 4px (default)</p>
        <ProgressLinear value={50} height={4} />
      </div>
      <div>
        <p>Height: 8px</p>
        <ProgressLinear value={70} height={8} />
      </div>
      <div>
        <p>Height: 16px</p>
        <ProgressLinear value={90} height={16} />
      </div>
    </div>
  ),
};

export const WithColors: StoryObj<typeof ProgressLinear> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <p>Primary (default)</p>
        <ProgressLinear value={60} color="var(--s-primary-bg-default)" />
      </div>
      <div>
        <p>Success</p>
        <ProgressLinear value={80} color="var(--s-success-bg-default)" />
      </div>
      <div>
        <p>Warning</p>
        <ProgressLinear value={40} color="var(--s-warning-bg-default)" />
      </div>
      <div>
        <p>Error</p>
        <ProgressLinear value={20} color="var(--s-error-bg-default)" />
      </div>
      <div>
        <p>Custom color</p>
        <ProgressLinear value={75} color="#9c27b0" />
      </div>
    </div>
  ),
};

export const ReverseDirection: StoryObj<typeof ProgressLinear> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <p>Normal direction</p>
        <ProgressLinear value={60} />
      </div>
      <div>
        <p>Reverse direction</p>
        <ProgressLinear value={60} reverse />
      </div>
      <div>
        <p>Indeterminate normal</p>
        <ProgressLinear indeterminate />
      </div>
      <div>
        <p>Indeterminate reverse</p>
        <ProgressLinear indeterminate reverse />
      </div>
    </div>
  ),
};

export const AbsolutePositioning: StoryObj<typeof ProgressLinear> = {
  render: () => (
    <div style={{ position: 'relative', height: '200px', border: '1px solid #ccc', padding: '20px' }}>
      <h3>Container with absolute positioned progress bars</h3>
      <p>This container has relative positioning. The progress bars below are absolutely positioned.</p>
      
      <ProgressLinear 
        value={75} 
        absolute 
        location="top" 
        color="var(--s-primary-bg-default)"
        style={{ zIndex: 1000 }}
      />
      
      <ProgressLinear 
        value={45} 
        absolute 
        location="bottom" 
        color="var(--s-success-bg-default)"
        style={{ zIndex: 1000 }}
      />
      
      <div style={{ marginTop: '100px' }}>
        <p>Content in the middle of the container</p>
      </div>
    </div>
  ),
};

export const AnimatedProgress: StoryObj<typeof ProgressLinear> = {
  render: () => {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <p>Animated Progress: {progress}%</p>
          <ProgressLinear value={progress} />
        </div>
        <div>
          <p>Indeterminate (always animating)</p>
          <ProgressLinear indeterminate />
        </div>
      </div>
    );
  },
};

export const AllVariants: StoryObj<typeof ProgressLinear> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div>
        <h3>Basic Progress</h3>
        <ProgressLinear value={25} />
        <ProgressLinear value={50} />
        <ProgressLinear value={75} />
        <ProgressLinear value={100} />
      </div>
      
      <div>
        <h3>Indeterminate</h3>
        <ProgressLinear indeterminate />
        <ProgressLinear indeterminate reverse />
      </div>
      
      <div>
        <h3>Different Heights</h3>
        <ProgressLinear value={60} height={2} />
        <ProgressLinear value={60} height={4} />
        <ProgressLinear value={60} height={8} />
        <ProgressLinear value={60} height={16} />
      </div>
      
      <div>
        <h3>Color Variants</h3>
        <ProgressLinear value={70} color="var(--s-primary-bg-default)" />
        <ProgressLinear value={70} color="var(--s-success-bg-default)" />
        <ProgressLinear value={70} color="var(--s-warning-bg-default)" />
        <ProgressLinear value={70} color="var(--s-error-bg-default)" />
      </div>
      
      <div>
        <h3>Reverse Direction</h3>
        <ProgressLinear value={60} />
        <ProgressLinear value={60} reverse />
      </div>
    </div>
  ),
};

export const Interactive: StoryObj<typeof ProgressLinear> = {
  render: () => {
    const [progress, setProgress] = React.useState(50);
    const [isIndeterminate, setIsIndeterminate] = React.useState(false);
    const [color, setColor] = React.useState('var(--s-primary-bg-default)');
    const [reverse, setReverse] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label>
            Progress: {progress}%
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              disabled={isIndeterminate}
            />
          </label>
        </div>
        
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={isIndeterminate}
              onChange={(e) => setIsIndeterminate(e.target.checked)}
            />
            Indeterminate
          </label>
        </div>
        
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={reverse}
              onChange={(e) => setReverse(e.target.checked)}
            />
            Reverse
          </label>
        </div>
        
        <div>
          <label>
            Color:
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="var(--s-primary-bg-default)">Primary</option>
              <option value="var(--s-success-bg-default)">Success</option>
              <option value="var(--s-warning-bg-default)">Warning</option>
              <option value="var(--s-error-bg-default)">Error</option>
              <option value="#9c27b0">Purple</option>
            </select>
          </label>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <ProgressLinear 
            value={progress}
            indeterminate={isIndeterminate}
            color={color}
            reverse={reverse}
            height={8}
          />
        </div>
      </div>
    );
  },
};

