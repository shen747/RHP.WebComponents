import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';

const meta: Meta<typeof FileInput> = {
  title: 'Inputs/File Input',
  component: FileInput,
};
export default meta;

export const Default: StoryObj<typeof FileInput> = {
  args: {},
};

