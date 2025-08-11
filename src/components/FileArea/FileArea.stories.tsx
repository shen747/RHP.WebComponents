import type { Meta, StoryObj } from '@storybook/react';
import { FileArea } from './FileArea';

const meta: Meta<typeof FileArea> = {
  title: 'Inputs/File Area',
  component: FileArea,
};
export default meta;

export const Default: StoryObj<typeof FileArea> = {
  args: {},
};

