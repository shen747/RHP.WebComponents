import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: 'A versatile layout component that supports positioning, flex layouts, grid layouts, and measurement properties.'
      }
    }
  },
  argTypes: {
    absolute: {
      control: 'boolean',
      description: 'Enable absolute positioning'
    },
    layout: {
      control: 'select',
      options: ['', 'grid', 'grid-fill', 'fill', 'flex'],
      description: 'Layout type'
    },
    flexAlign: {
      control: 'select',
      options: ['', 'align-start', 'align-center', 'align-end', 'align-stretch', 'align-baseline'],
      description: 'Flex alignment'
    },
    flexDirection: {
      control: 'select',
      options: ['', 'row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction'
    },
    flexJustify: {
      control: 'select',
      options: ['', 'justify-start', 'justify-center', 'justify-end', 'justify-space-between', 'justify-space-around', 'justify-space-evenly'],
      description: 'Flex justification'
    },
    flexWrap: {
      control: 'select',
      options: ['', 'wrap', 'nowrap', 'wrap-reverse'],
      description: 'Flex wrap'
    },
    width: {
      control: 'text',
      description: 'Width (number for px, string for other units)'
    },
    height: {
      control: 'text',
      description: 'Height (number for px, string for other units)'
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Box> = {
  render: () => (
    <Box style={{ border: '1px dashed var(--s-neutral-border-weak-default)', padding: 16 }}>
      Default Box Content
    </Box>
  ),
};

export const WithMeasurements: StoryObj<typeof Box> = {
  render: () => (
    <Box 
      width={300} 
      height={200} 
      style={{ 
        border: '1px dashed var(--s-neutral-border-weak-default)', 
        padding: 16,
        backgroundColor: 'var(--s-neutral-bg-weak-default)'
      }}
    >
      Box with fixed width (300px) and height (200px)
    </Box>
  ),
};

export const FlexLayout: StoryObj<typeof Box> = {
  render: () => (
    <Box 
      layout="flex"
      flexDirection="row"
      flexJustify="justify-space-between"
      flexAlign="align-center"
      style={{ 
        border: '1px dashed var(--s-neutral-border-weak-default)', 
        padding: 16,
        height: 100
      }}
    >
      <div style={{ padding: 8, backgroundColor: 'var(--s-primary-bg-default)', color: 'white' }}>Item 1</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-secondary-bg-default)', color: 'white' }}>Item 2</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-accent-bg-default)', color: 'white' }}>Item 3</div>
    </Box>
  ),
};

export const GridLayout: StoryObj<typeof Box> = {
  render: () => (
    <Box 
      layout="grid"
      style={{ 
        border: '1px dashed var(--s-neutral-border-weak-default)', 
        padding: 16,
        height: 200
      }}
    >
      <div style={{ padding: 8, backgroundColor: 'var(--s-primary-bg-default)', color: 'white' }}>Grid Item 1</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-secondary-bg-default)', color: 'white' }}>Grid Item 2</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-accent-bg-default)', color: 'white' }}>Grid Item 3</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-warning-bg-default)', color: 'white' }}>Grid Item 4</div>
    </Box>
  ),
};

export const AbsolutePositioning: StoryObj<typeof Box> = {
  render: () => (
    <div style={{ position: 'relative', height: 200, border: '1px solid var(--s-neutral-border-default)' }}>
      <Box 
        absolute
        top={20}
        right={20}
        width={150}
        height={100}
        style={{ 
          backgroundColor: 'var(--s-primary-bg-default)', 
          color: 'white',
          padding: 16,
          borderRadius: 'var(--s-radius-s)'
        }}
      >
        Absolutely positioned box
      </Box>
    </div>
  ),
};

export const FillLayout: StoryObj<typeof Box> = {
  render: () => (
    <div style={{ height: 200, border: '1px solid var(--s-neutral-border-default)' }}>
      <Box 
        layout="fill"
        style={{ 
          backgroundColor: 'var(--s-neutral-bg-weak-default)', 
          padding: 16
        }}
      >
        Fill layout box (takes full width and height of parent)
      </Box>
    </div>
  ),
};

export const ResponsiveLayout: StoryObj<typeof Box> = {
  render: () => (
    <Box 
      layout="flex"
      flexDirection="column"
      flexAlign="align-center"
      style={{ 
        border: '1px dashed var(--s-neutral-border-weak-default)', 
        padding: 16,
        minHeight: 150
      }}
    >
      <div style={{ padding: 8, backgroundColor: 'var(--s-primary-bg-default)', color: 'white', marginBottom: 8 }}>Header</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-secondary-bg-default)', color: 'white', marginBottom: 8 }}>Content</div>
      <div style={{ padding: 8, backgroundColor: 'var(--s-accent-bg-default)', color: 'white' }}>Footer</div>
    </Box>
  ),
};

