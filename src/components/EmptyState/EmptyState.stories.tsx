import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/Empty State',
  component: EmptyState,
};
export default meta;

export const Default: StoryObj<typeof EmptyState> = {
  render: () => (
    <EmptyState title="No data" description="Try adjusting filters" actions={<><Button>Refresh</Button><Button variant="ghost">Clear</Button></>} />
  ),
};

