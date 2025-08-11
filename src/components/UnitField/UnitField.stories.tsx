import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UnitField, MeasureValue } from './UnitField';

const meta: Meta<typeof UnitField> = {
  title: 'Inputs/UnitField',
  component: UnitField,
};
export default meta;

const units = [
  { value: 'CM', text: 'CM', itemText: 'Centimeters' },
  { value: 'M', text: 'M', itemText: 'Meters' },
  { value: 'KM', text: 'KM', itemText: 'Kilometers' },
];

export const Basic: StoryObj<typeof UnitField> = {
  render: () => {
    const [val, setVal] = useState<MeasureValue>({ magnitude: 10, unit: 'CM' });
    return <UnitField value={val} units={units} onChange={setVal} />;
  },
};

