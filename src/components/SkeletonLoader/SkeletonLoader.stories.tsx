import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoader } from './SkeletonLoader';

const meta: Meta<typeof SkeletonLoader> = {
  title: 'Utilities/SkeletonLoader',
  component: SkeletonLoader,
};
export default meta;

export const Basic: StoryObj<typeof SkeletonLoader> = {
  args: {
    height: '24px',
    width: '240px',
  },
};

export const ContentSwap: StoryObj<typeof SkeletonLoader> = {
  args: {
    loading: false,
    children: 'Loaded content',
  },
};

