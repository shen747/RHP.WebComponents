import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '.';

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    component: Chip,
    parameters: {
        docs: {
            description: {
                component: 'A versatile chip component that supports various variants, sentiments, sizes, and interactive features including dropdown menus.'
            }
        }
    },
    args: { label: 'Chip', size: 'm' },
    argTypes: {
        variant: { 
            control: 'select', 
            options: ['close', 'refinement', 'dropdown'],
            description: 'The variant of the chip'
        },
        sentiment: { 
            control: 'select', 
            options: ['primary', 'success', 'critical', 'warning'],
            description: 'The sentiment/color theme of the chip'
        },
        size: { 
            control: 'select', 
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
            description: 'The size of the chip'
        },
        leadingIcon: { 
            control: 'text',
            description: 'Icon to display before the content'
        },
        trailingIcon: { 
            control: 'text',
            description: 'Icon to display after the content'
        },
        disabled: { 
            control: 'boolean',
            description: 'Whether the chip is disabled'
        },
        color: { 
            control: 'color',
            description: 'Custom color for the chip'
        },
        colorClassName: { 
            control: 'text',
            description: 'CSS class for custom styling'
        },
        width: {
            control: 'text',
            description: 'Width of the chip'
        },
        height: {
            control: 'text',
            description: 'Height of the chip'
        }
    },
};
export default meta;

export const Basic: StoryObj<typeof Chip> = {};

export const Refinement: StoryObj<typeof Chip> = { 
    args: { variant: 'refinement' } 
};

export const Close: StoryObj<typeof Chip> = { 
    args: { 
        variant: 'close',
        onCloseClick: (e) => console.log('Close clicked', e)
    } 
};

export const Dropdown: StoryObj<typeof Chip> = { 
    args: { 
        variant: 'dropdown',
        dropdown: (
            <div style={{ padding: 'var(--s-padding-s)' }}>
                <div style={{ padding: 'var(--s-padding-xs)', cursor: 'pointer' }}>Option 1</div>
                <div style={{ padding: 'var(--s-padding-xs)', cursor: 'pointer' }}>Option 2</div>
                <div style={{ padding: 'var(--s-padding-xs)', cursor: 'pointer' }}>Option 3</div>
            </div>
        )
    } 
};

export const WithIcons: StoryObj<typeof Chip> = { 
    args: { 
        leadingIcon: 'a-icon-star', 
        trailingIcon: 'a-icon-info' 
    } 
};

export const Sentiments: StoryObj<typeof Chip> = {
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--s-spacing-s)', flexWrap: 'wrap' }}>
            <Chip label="Primary" sentiment="primary" />
            <Chip label="Success" sentiment="success" />
            <Chip label="Warning" sentiment="warning" />
            <Chip label="Critical" sentiment="critical" />
        </div>
    )
};

export const Sizes: StoryObj<typeof Chip> = {
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--s-spacing-s)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Chip label="Extra Small" size="xs" />
            <Chip label="Small" size="s" />
            <Chip label="Medium" size="m" />
            <Chip label="Large" size="l" />
            <Chip label="Extra Large" size="xl" />
            <Chip label="2XL" size="xxl" />
        </div>
    )
};

export const CustomColor: StoryObj<typeof Chip> = {
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--s-spacing-s)', flexWrap: 'wrap' }}>
            <Chip label="Custom Blue" color="#3b82f6" />
            <Chip label="Custom Green" color="#10b981" />
            <Chip label="Custom Purple" color="#8b5cf6" />
            <Chip label="Custom Orange" color="#f59e0b" />
        </div>
    )
};

export const WithMeasurements: StoryObj<typeof Chip> = {
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--s-spacing-s)', flexWrap: 'wrap' }}>
            <Chip label="Fixed Width" width={150} />
            <Chip label="Fixed Height" height={40} />
            <Chip label="Custom Size" width={200} height={50} />
            <Chip label="Responsive" width="100%" />
        </div>
    )
};

export const Interactive: StoryObj<typeof Chip> = {
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--s-spacing-s)', flexWrap: 'wrap' }}>
            <Chip 
                label="Clickable" 
                onClick={() => alert('Chip clicked!')}
                sentiment="primary"
            />
            <Chip 
                label="Closeable" 
                variant="close"
                onCloseClick={() => alert('Close clicked!')}
                sentiment="warning"
            />
            <Chip 
                label="Dropdown" 
                variant="dropdown"
                dropdown={
                    <div style={{ padding: 'var(--s-padding-s)' }}>
                        <div style={{ padding: 'var(--s-padding-xs)', cursor: 'pointer' }} onClick={() => alert('Option 1')}>
                            Option 1
                        </div>
                        <div style={{ padding: 'var(--s-padding-xs)', cursor: 'pointer' }} onClick={() => alert('Option 2')}>
                            Option 2
                        </div>
                    </div>
                }
                sentiment="success"
            />
        </div>
    )
};

export const Disabled: StoryObj<typeof Chip> = {
    render: () => (
        <div style={{ display: 'flex', gap: 'var(--s-spacing-s)', flexWrap: 'wrap' }}>
            <Chip label="Disabled Default" disabled />
            <Chip label="Disabled Primary" sentiment="primary" disabled />
            <Chip label="Disabled Success" sentiment="success" disabled />
            <Chip label="Disabled Close" variant="close" disabled />
        </div>
    )
};
