import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};
export default meta;

export const Image: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/583231?v=4',
    alt: 'Octocat',
  },
};

export const Initials: StoryObj<typeof Avatar> = {
  args: { name: 'Jane Doe' },
};

export const Sizes: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Avatar size="xs" name="Jane Doe" />
      <Avatar size="s" name="Jane Doe" />
      <Avatar size="m" name="Jane Doe" />
      <Avatar size="l" name="Jane Doe" />
      <Avatar size="xl" name="Jane Doe" />
    </div>
  ),
};

