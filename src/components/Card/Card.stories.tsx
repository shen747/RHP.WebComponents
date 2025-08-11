import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardActions, CardTitle, CardSubtitle, CardText } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Surfaces/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'A versatile card component that supports layouts, sub-components, and various styling options.'
      }
    }
  },
  argTypes: {
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

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card style={{ width: 300 }}>
      <CardTitle>Card Title</CardTitle>
      <CardText>This is a basic card with title and text content.</CardText>
    </Card>
  ),
};

export const WithSubComponents: StoryObj<typeof Card> = {
  render: () => (
    <Card style={{ width: 400 }}>
      <CardTitle>Project Dashboard</CardTitle>
      <CardSubtitle>Overview of current project status</CardSubtitle>
      <CardText>
        This card demonstrates all the available sub-components: CardTitle, CardSubtitle, CardText, and CardActions.
      </CardText>
      <CardActions>
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </CardActions>
    </Card>
  ),
};

export const FlexLayout: StoryObj<typeof Card> = {
  render: () => (
    <Card 
      layout="flex"
      flexDirection="column"
      flexAlign="align-center"
      style={{ width: 350, height: 200 }}
    >
      <CardTitle>Flex Layout Card</CardTitle>
      <CardText style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        This card uses flex layout with column direction and center alignment.
      </CardText>
      <CardActions>
        <Button>Action</Button>
      </CardActions>
    </Card>
  ),
};

export const GridLayout: StoryObj<typeof Card> = {
  render: () => (
    <Card 
      layout="grid"
      style={{ width: 400, height: 200 }}
    >
      <div style={{ padding: 'var(--s-padding-s)', backgroundColor: 'var(--s-primary-bg-default)', color: 'white' }}>Grid Item 1</div>
      <div style={{ padding: 'var(--s-padding-s)', backgroundColor: 'var(--s-secondary-bg-default)', color: 'white' }}>Grid Item 2</div>
      <div style={{ padding: 'var(--s-padding-s)', backgroundColor: 'var(--s-accent-bg-default)', color: 'white' }}>Grid Item 3</div>
      <div style={{ padding: 'var(--s-padding-s)', backgroundColor: 'var(--s-warning-bg-default)', color: 'white' }}>Grid Item 4</div>
    </Card>
  ),
};

export const WithCustomColor: StoryObj<typeof Card> = {
  render: () => (
    <Card 
      color="var(--s-primary-bg-default)"
      style={{ width: 300 }}
    >
      <CardTitle style={{ color: 'white' }}>Colored Card</CardTitle>
      <CardText style={{ color: 'white' }}>
        This card has a custom background color applied.
      </CardText>
    </Card>
  ),
};

export const FillAvailable: StoryObj<typeof Card> = {
  render: () => (
    <div style={{ height: 200, border: '1px solid var(--s-neutral-border-default)' }}>
      <Card fillAvailable>
        <CardTitle>Fill Available Card</CardTitle>
        <CardText>This card fills the available space of its parent container.</CardText>
      </Card>
    </div>
  ),
};

export const LinkCard: StoryObj<typeof Card> = {
  render: () => (
    <Card 
      href="#"
      style={{ width: 300, cursor: 'pointer' }}
    >
      <CardTitle>Clickable Card</CardTitle>
      <CardText>This card acts as a link and can be clicked.</CardText>
    </Card>
  ),
};

export const ResponsiveLayout: StoryObj<typeof Card> = {
  render: () => (
    <Card 
      layout="flex"
      flexDirection="column"
      style={{ width: 350, minHeight: 150 }}
    >
      <CardTitle>Responsive Layout</CardTitle>
      <CardText style={{ flex: 1 }}>
        This card demonstrates a responsive layout that adapts to different screen sizes.
      </CardText>
      <CardActions>
        <Button variant="ghost" size="s">Small</Button>
        <Button size="s">Medium</Button>
        <Button size="l">Large</Button>
      </CardActions>
    </Card>
  ),
};

