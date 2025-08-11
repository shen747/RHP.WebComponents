import type { Meta, StoryObj } from '@storybook/react';
import { ActionBar } from './ActionBar';
import { Button } from '../Button';

const meta: Meta<typeof ActionBar> = {
  title: 'Components/ActionBar',
  component: ActionBar,
};
export default meta;

export const Default: StoryObj<typeof ActionBar> = {
  render: () => (
    <ActionBar>
      <div>Left content</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button>Secondary</Button>
        <Button variant="fill" sentiment="primary">
          Primary
        </Button>
      </div>
    </ActionBar>
  ),
};

