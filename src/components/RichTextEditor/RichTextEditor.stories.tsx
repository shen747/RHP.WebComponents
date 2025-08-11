import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Editors/RichTextEditor',
  component: RichTextEditor,
};
export default meta;

export const Basic: StoryObj<typeof RichTextEditor> = {
  args: {
    placeholder: 'Type here...'
  }
};

