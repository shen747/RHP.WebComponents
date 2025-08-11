import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  title: 'Inputs/NumberField',
  component: NumberField,
};
export default meta;

export const Controlled: StoryObj<typeof NumberField> = {
  render: () => {
    const [v, setV] = useState<number>(10);
    return <NumberField value={v} onValueChange={setV} min={0} max={100} />
  },
};

