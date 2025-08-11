import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Inputs/Color Picker',
  component: ColorPicker,
};
export default meta;

export const Default: StoryObj<typeof ColorPicker> = {
  args: {},
};

export const WithCanvas: StoryObj<typeof ColorPicker> = {
  args: { canvasHeight: 200 },
};

