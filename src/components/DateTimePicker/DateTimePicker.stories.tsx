import type { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker } from './DateTimePicker';
import React from 'react';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Inputs/DateTime Picker',
  component: DateTimePicker,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced DateTimePicker component with timezone support, seconds precision, today button, and custom date functions.'
      }
    }
  },
  argTypes: {
    useSeconds: {
      control: { type: 'boolean' },
      description: 'Include seconds in time selection'
    },
    showTimeZone: {
      control: { type: 'boolean' },
      description: 'Show timezone selector'
    },
    hideTodayButton: {
      control: { type: 'boolean' },
      description: 'Hide the today button'
    },
    value: {
      control: { type: 'text' },
      description: 'Current date-time value'
    }
  }
};
export default meta;

export const Default: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: '2024-05-06T12:30' 
  }
};

export const WithSeconds: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: '2024-05-06T12:30:45',
    useSeconds: true
  }
};

export const WithTimezone: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: '2024-05-06T12:30 UTC+2',
    showTimeZone: true
  }
};

export const WithSecondsAndTimezone: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: '2024-05-06T12:30:45 UTC+2',
    useSeconds: true,
    showTimeZone: true
  }
};

export const WithoutTodayButton: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: '2024-05-06T12:30',
    hideTodayButton: true
  }
};

export const CustomTodayFunction: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: '2024-05-06T12:30',
    todayDateFn: (showTimeZone) => {
      const now = new Date();
      const date = now.toISOString().split('T')[0];
      const time = now.toTimeString().split(' ')[0].substring(0, 5);
      const timeZone = showTimeZone ? 'UTC+1' : '';
      return `${date} ${time} ${timeZone}`.trim();
    }
  }
};

export const EmptyValue: StoryObj<typeof DateTimePicker> = {
  args: { 
    value: ''
  }
};

export const ComplexExample: StoryObj<typeof DateTimePicker> = {
  render: () => {
    const [value, setValue] = React.useState('2024-05-06T12:30:45 UTC+2');
    
    return (
      <div style={{ padding: '20px' }}>
        <h3>Interactive DateTimePicker</h3>
        <p>Current value: {value}</p>
        <DateTimePicker
          value={value}
          onChange={setValue}
          useSeconds={true}
          showTimeZone={true}
        />
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => setValue('')}>Clear</button>
          <button onClick={() => setValue('2024-12-25T00:00 UTC')}>Christmas</button>
          <button onClick={() => setValue('2024-01-01T00:00:00 UTC+0')}>New Year</button>
        </div>
      </div>
    );
  }
};

