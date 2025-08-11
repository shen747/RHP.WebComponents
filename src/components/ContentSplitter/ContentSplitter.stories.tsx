import type { Meta, StoryObj } from '@storybook/react';
import { ContentSplitter } from './ContentSplitter';

const meta: Meta<typeof ContentSplitter> = {
  title: 'Layout/Content Splitter',
  component: ContentSplitter,
};
export default meta;

export const Default: StoryObj<typeof ContentSplitter> = {
  args: { children: '10 km' },
};

export const Dashed: StoryObj<typeof ContentSplitter> = {
  args: { children: '10 km', variant: 'dashed' },
};

