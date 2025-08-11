import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Inputs/Slider',
  component: Slider,
};
export default meta;

export const Basic: StoryObj<typeof Slider> = {
  render: () => {
    const [v, setV] = useState(25);
    return <Slider value={v} onChange={setV} showTicks ticks={[0,25,50,75,100]} thumbLabel />;
  }
};

