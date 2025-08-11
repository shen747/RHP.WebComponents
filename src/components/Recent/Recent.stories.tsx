import type { Meta, StoryObj } from '@storybook/react';
import { Recent } from './Recent';

const meta: Meta<typeof Recent> = {
  title: 'Components/Recent',
  component: Recent,
};
export default meta;

export const Basic: StoryObj<typeof Recent> = {
  args: {
    favorites: [{ id: '1', caption: 'Fav 1' }],
    recents: [{ id: '2', caption: 'Recent 1' }, { id: '3', caption: 'Recent 2' }],
  },
};

