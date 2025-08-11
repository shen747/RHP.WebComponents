import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Indicators/Status',
  component: Status,
};
export default meta;

export const Variants: StoryObj<typeof Status> = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Status label="Info" sentiment="info" />
      <Status label="Positive" sentiment="positive" variant="filled" />
      <Status label="Warning" sentiment="warning" variant="outlined" />
    </div>
  ),
};

export const Editable: StoryObj<typeof Status> = {
  args: {
    editable: true,
    items: [
      { label: 'Open', value: 'open' },
      { label: 'Closed', value: 'closed' },
    ],
  },
};

