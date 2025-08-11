import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '.';

const meta: Meta<typeof TextArea> = {
    title: 'Components/TextArea',
    component: TextArea,
    args: { placeholder: 'Enter text', rows: 5 },
};
export default meta;

export const Basic: StoryObj<typeof TextArea> = {};
