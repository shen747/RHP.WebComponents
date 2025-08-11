import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced Switch component with validation states, sentiment, restricted mode, and tooltips.'
      }
    }
  },
  argTypes: {
    sentiment: {
      control: { type: 'select' },
      options: ['critical', 'warning', 'success'],
      description: 'Visual sentiment state'
    },
    tooltipPosition: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Tooltip position'
    }
  }
};
export default meta;

export const Default: StoryObj<typeof Switch> = {
  args: { label: 'Enable notifications' },
};

export const Controlled: StoryObj<typeof Switch> = {
  render: () => {
    const [on, setOn] = React.useState(true);
    return <Switch label="Controlled" checked={on} onChange={setOn} />;
  },
};

export const WithValidation: StoryObj<typeof Switch> = {
  args: {
    label: 'Accept terms and conditions',
    required: true,
    validationState: {
      alertLevel: 'error',
      messages: ['You must accept the terms to continue']
    }
  },
};

export const WithSentiment: StoryObj<typeof Switch> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch label="Success state" sentiment="success" />
      <Switch label="Warning state" sentiment="warning" />
      <Switch label="Critical state" sentiment="critical" />
    </div>
  ),
};

export const Disabled: StoryObj<typeof Switch> = {
  args: { label: 'Disabled switch', disabled: true },
};

export const Readonly: StoryObj<typeof Switch> = {
  args: { label: 'Readonly switch', readonly: true, checked: true },
};

export const Restricted: StoryObj<typeof Switch> = {
  args: { label: 'Restricted switch', restricted: true },
};

export const WithTooltip: StoryObj<typeof Switch> = {
  args: {
    label: 'Switch with tooltip',
    tooltip: 'This switch controls important functionality',
    tooltipPosition: 'top'
  },
};

export const WithMessages: StoryObj<typeof Switch> = {
  args: {
    label: 'Switch with messages',
    messages: ['This is a helpful message', 'Another message']
  },
};

export const ComplexValidation: StoryObj<typeof Switch> = {
  args: {
    label: 'Complex validation example',
    required: true,
    validationState: {
      alertLevel: 'warning',
      messages: ['Please review this setting carefully']
    },
    tooltip: 'Additional context about this switch'
  },
};

export const AllStates: StoryObj<typeof Switch> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3>Default States</h3>
      <Switch label="Default off" />
      <Switch label="Default on" checked />
      
      <h3>Sentiment States</h3>
      <Switch label="Success" sentiment="success" checked />
      <Switch label="Warning" sentiment="warning" checked />
      <Switch label="Critical" sentiment="critical" checked />
      
      <h3>Interactive States</h3>
      <Switch label="Disabled" disabled />
      <Switch label="Readonly" readonly checked />
      <Switch label="Restricted" restricted />
      
      <h3>With Validation</h3>
      <Switch 
        label="Required field" 
        required 
        validationState={{
          alertLevel: 'error',
          messages: ['This field is required']
        }}
      />
      
      <h3>With Tooltips</h3>
      <Switch 
        label="With tooltip" 
        tooltip="This is a helpful tooltip"
        tooltipPosition="right"
      />
    </div>
  ),
};

export const Interactive: StoryObj<typeof Switch> = {
  render: () => {
    const [switches, setSwitches] = React.useState({
      notifications: false,
      email: true,
      sms: false,
      marketing: false
    });

    const handleChange = (key: string, value: boolean) => {
      setSwitches(prev => ({ ...prev, [key]: value }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h3>Notification Preferences</h3>
        <Switch 
          label="Push notifications" 
          checked={switches.notifications}
          onChange={(value) => handleChange('notifications', value)}
          tooltip="Receive notifications in real-time"
        />
        <Switch 
          label="Email notifications" 
          checked={switches.email}
          onChange={(value) => handleChange('email', value)}
          sentiment={switches.email ? 'success' : undefined}
        />
        <Switch 
          label="SMS notifications" 
          checked={switches.sms}
          onChange={(value) => handleChange('sms', value)}
          disabled={!switches.notifications}
          tooltip={!switches.notifications ? "Enable push notifications first" : "Receive SMS alerts"}
        />
        <Switch 
          label="Marketing communications" 
          checked={switches.marketing}
          onChange={(value) => handleChange('marketing', value)}
          sentiment={switches.marketing ? 'warning' : undefined}
          tooltip="Receive promotional content"
        />
        
        <div style={{ marginTop: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Current state:</strong>
          <pre>{JSON.stringify(switches, null, 2)}</pre>
        </div>
      </div>
    );
  },
};

