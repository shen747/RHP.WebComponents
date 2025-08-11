import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Feedback/Callout',
  component: Callout,
};
export default meta;

export const Default: StoryObj<typeof Callout> = {
  args: { title: 'Info', description: 'This is a callout', sentiment: 'info' },
};

export const Inline: StoryObj<typeof Callout> = {
  args: { title: 'Inline', description: 'Inline callout', variant: 'inline', sentiment: 'info' },
};

export const Sentiments: StoryObj<typeof Callout> = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <Callout title="Info" description="Message" sentiment="info" />
      <Callout title="Success" description="Message" sentiment="success" />
      <Callout title="Warning" description="Message" sentiment="warning" />
      <Callout title="Critical" description="Message" sentiment="critical" />
    </div>
  ),
};

