import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UnitStepper } from './UnitStepper';

const meta: Meta<typeof UnitStepper> = {
  title: 'Inputs/UnitStepper',
  component: UnitStepper,
};
export default meta;

export const Basic: StoryObj<typeof UnitStepper> = {
  render: () => {
    const [val, setVal] = useState<number | null>(5);
    return <UnitStepper value={val} onChange={setVal} unit="kg" min={0} max={10} />;
  },
};

