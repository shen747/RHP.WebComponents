import type { Meta, StoryObj } from '@storybook/react';
import { Draggable } from './Draggable';

const meta: Meta<typeof Draggable> = {
  title: 'Interaction/Draggable',
  component: Draggable,
};
export default meta;

export const Default: StoryObj<typeof Draggable> = {
  render: () => (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div style={{ width: 120, height: 80, background: 'var(--s-primary-bg-weak-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--s-primary-border-weak-default)' }}>Drag me</div>
    </Draggable>
  ),
};

