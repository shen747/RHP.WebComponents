import type { Meta, StoryObj } from '@storybook/react';
import { DocumentViewer } from './DocumentViewer';

const meta: Meta<typeof DocumentViewer> = {
  title: 'Data Display/Document Viewer',
  component: DocumentViewer,
};
export default meta;

export const Default: StoryObj<typeof DocumentViewer> = {
  args: { src: 'about:blank' },
};

