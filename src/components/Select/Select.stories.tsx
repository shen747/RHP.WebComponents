import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Enhanced Select component with multiple selection, filtering, loading state, and custom rendering capabilities.'
      }
    }
  },
  args: {
    placeholder: 'Choose an option',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ],
  },
  argTypes: {
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    multiple: { control: 'boolean' },
    filterable: { control: 'boolean' },
    loading: { control: 'boolean' },
    displayOnly: { control: 'boolean' },
  },
};
export default meta;

export const Basic: StoryObj<typeof Select> = {};

export const WithValue: StoryObj<typeof Select> = { 
  args: { value: 'banana' } 
};

export const Multiple: StoryObj<typeof Select> = {
  args: {
    multiple: true,
    value: ['apple', 'banana'],
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Dragon Fruit', value: 'dragon-fruit' },
      { label: 'Elderberry', value: 'elderberry' },
    ]
  }
};

export const Filterable: StoryObj<typeof Select> = {
  args: {
    filterable: true,
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Dragon Fruit', value: 'dragon-fruit' },
      { label: 'Elderberry', value: 'elderberry' },
      { label: 'Fig', value: 'fig' },
      { label: 'Grape', value: 'grape' },
      { label: 'Honeydew', value: 'honeydew' },
    ]
  }
};

export const MultipleFilterable: StoryObj<typeof Select> = {
  args: {
    multiple: true,
    filterable: true,
    value: ['apple', 'banana'],
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Dragon Fruit', value: 'dragon-fruit' },
      { label: 'Elderberry', value: 'elderberry' },
      { label: 'Fig', value: 'fig' },
      { label: 'Grape', value: 'grape' },
      { label: 'Honeydew', value: 'honeydew' },
    ]
  }
};

export const Loading: StoryObj<typeof Select> = {
  args: {
    loading: true,
    options: [
      { label: 'Loading...', value: 'loading' }
    ]
  }
};

export const DisplayOnly: StoryObj<typeof Select> = {
  args: {
    displayOnly: true,
    value: 'banana',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ]
  }
};

export const WithDividersAndHeaders: StoryObj<typeof Select> = {
  args: {
    options: [
      { label: 'Fruits', header: true },
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { divider: true },
      { label: 'Vegetables', header: true },
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' },
    ]
  }
};

export const WithDisabledOptions: StoryObj<typeof Select> = {
  args: {
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana', disabled: true },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Dragon Fruit', value: 'dragon-fruit', disabled: true },
      { label: 'Elderberry', value: 'elderberry' },
    ]
  }
};

export const CustomItemRendering: StoryObj<typeof Select> = {
  args: {
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ],
    renderItem: (item) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          backgroundColor: item.value === 'apple' ? '#ff0000' : 
                          item.value === 'banana' ? '#ffff00' : '#ff0000'
        }} />
        <span>{item.label}</span>
      </div>
    )
  }
};

export const CustomSelectionRendering: StoryObj<typeof Select> = {
  args: {
    multiple: true,
    value: ['apple', 'banana'],
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ],
    renderSelection: (item, index) => (
      <span style={{ 
        color: item.value === 'apple' ? '#ff0000' : 
               item.value === 'banana' ? '#ffff00' : '#ff0000',
        fontWeight: 'bold'
      }}>
        {item.label}
      </span>
    )
  }
};

export const Interactive: StoryObj<typeof Select> = {
  render: () => {
    const [value, setValue] = React.useState<string | string[]>();
    const [filterValue, setFilterValue] = React.useState('');
    
    const options = [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Dragon Fruit', value: 'dragon-fruit' },
      { label: 'Elderberry', value: 'elderberry' },
    ];

    return (
      <div style={{ padding: '20px' }}>
        <h3>Interactive Select</h3>
        <p>Selected value: {JSON.stringify(value)}</p>
        <p>Filter value: {filterValue}</p>
        
        <div style={{ marginBottom: '20px' }}>
          <Select
            value={value}
            onChange={setValue}
            onInput={setFilterValue}
            options={options}
            multiple={true}
            filterable={true}
            placeholder="Choose fruits..."
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setValue(undefined)}>Clear</button>
          <button onClick={() => setValue(['apple', 'banana'])}>Select Apple & Banana</button>
          <button onClick={() => setValue('cherry')}>Select Cherry</button>
        </div>
      </div>
    );
  }
};

