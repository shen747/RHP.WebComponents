import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Utilities/Overlay',
  component: Overlay,
};
export default meta;

export const Basic: StoryObj<typeof Overlay> = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return (
      <div>
        <button onClick={() => setVisible(v => !v)}>Toggle</button>
        <Overlay visible={visible} onClick={() => setVisible(false)} />
      </div>
    );
  },
};

