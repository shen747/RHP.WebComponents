import type { Meta, StoryObj } from '@storybook/react';
import { DocumentPreview } from './DocumentPreview';

const meta: Meta<typeof DocumentPreview> = {
  title: 'Data Display/Document Preview',
  component: DocumentPreview,
};
export default meta;

export const Image: StoryObj<typeof DocumentPreview> = {
  args: { src: 'https://via.placeholder.com/400x200.png', mimeType: 'image/png' },
};

export const PDF: StoryObj<typeof DocumentPreview> = {
  args: { src: 'about:blank', mimeType: 'application/pdf' },
};

export const Fallback: StoryObj<typeof DocumentPreview> = {
  args: { fallback: 'No preview' },
};

