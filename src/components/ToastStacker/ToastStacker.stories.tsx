import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToastStacker } from './ToastStacker';
import { Button } from '../Button';

const meta: Meta<typeof ToastStacker> = {
  title: 'Feedback/ToastStacker',
  component: ToastStacker,
};
export default meta;

export const Basic: StoryObj<typeof ToastStacker> = {
  render: () => {
    const [toasts, setToasts] = useState<any[]>([]);
    let nextId = 1;
    function add(sentiment: any) {
      setToasts((prev) => [{ id: nextId++, title: `${sentiment} Toast`, description: `This is a ${sentiment} toast`, sentiment, timeout: 8000 }, ...prev]);
    }
    function clear() {
      setToasts([]);
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button onClick={() => add('critical')}>Add critical toast</Button>
        <Button onClick={() => add('info')}>Add info toast</Button>
        <Button onClick={() => add('warning')}>Add warning toast</Button>
        <Button onClick={() => add('success')}>Add success toast</Button>
        <Button sentiment="critical" onClick={clear}>Clear toasts</Button>
        <ToastStacker toasts={toasts} onToastsChange={setToasts} />
      </div>
    );
  },
};

