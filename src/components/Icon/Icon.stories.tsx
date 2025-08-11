import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon component using the Apply design system icon font. Use icon names like `a-icon-add`, `a-icon-arrow-down`, etc.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: 'a-icon-add'
  }
};

export const SimpleTest: Story = {
  render: () => (
    <div style={{ padding: '20px', fontSize: '24px' }}>
      <Icon name="a-icon-add" />
      <Icon name="a-icon-search" />
      <Icon name="a-icon-settings" />
    </div>
  )
};

export const ArrowIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="a-icon-arrow-up" />
      <Icon name="a-icon-arrow-down" />
      <Icon name="a-icon-arrow-left" />
      <Icon name="a-icon-arrow-right" />
    </div>
  )
};

export const CommonIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Icon name="a-icon-add" />
      <Icon name="a-icon-edit" />
      <Icon name="a-icon-delete" />
      <Icon name="a-icon-search" />
      <Icon name="a-icon-settings" />
      <Icon name="a-icon-user" />
      <Icon name="a-icon-calendar" />
      <Icon name="a-icon-bell" />
      <Icon name="a-icon-bookmark" />
      <Icon name="a-icon-download" />
      <Icon name="a-icon-upload" />
      <Icon name="a-icon-print" />
      <Icon name="a-icon-share" />
      <Icon name="a-icon-heart" />
      <Icon name="a-icon-star" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="a-icon-add" className="rhp-icon--xs" />
      <Icon name="a-icon-add" className="rhp-icon--s" />
      <Icon name="a-icon-add" className="rhp-icon--m" />
      <Icon name="a-icon-add" className="rhp-icon--l" />
      <Icon name="a-icon-add" className="rhp-icon--xl" />
      <Icon name="a-icon-add" className="rhp-icon--xxl" />
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="a-icon-add" />
      <Icon name="a-icon-add" className="rhp-icon--disabled" />
    </div>
  )
};
