import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: 'An image component with lazy loading, fallback support, and responsive features.'
      }
    }
  },
  argTypes: {
    aspectRatio: { control: 'text' },
    cover: { control: 'boolean' },
    eager: { control: 'boolean' },
    fallbackIcon: { control: 'text' },
    fallbackImage: { control: 'text' },
    gradient: { control: 'text' },
    height: { control: 'text' },
    width: { control: 'text' },
    transition: { control: 'select', options: [true, false, 'fade', 'slide'] }
  }
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample image',
    width: 400,
    height: 300
  }
};

export const WithAspectRatio: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Aspect ratio image',
    aspectRatio: '16/9',
    width: 400
  }
};

export const Cover: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Cover image',
    width: 300,
    height: 200,
    cover: true
  }
};

export const WithGradient: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Image with gradient',
    width: 400,
    height: 300,
    gradient: 'linear-gradient(45deg, rgba(0,0,0,0.3), rgba(255,255,255,0.1))'
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Image {...args}>
        <div style={{ 
          position: 'absolute', 
          bottom: '10px', 
          left: '10px', 
          color: 'white', 
          fontWeight: 'bold',
          zIndex: 3
        }}>
          Overlay Text
        </div>
      </Image>
    </div>
  )
};

export const LazyLoading: Story = {
  args: {
    src: 'https://picsum.photos/400/300?random=1',
    lazySrc: 'https://picsum.photos/40/30?random=1',
    alt: 'Lazy loaded image',
    width: 400,
    height: 300
  }
};

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.jpg',
    fallbackImage: 'https://picsum.photos/400/300?random=2',
    alt: 'Image with fallback',
    width: 400,
    height: 300
  }
};

export const ErrorState: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.jpg',
    alt: 'Broken image',
    width: 400,
    height: 300,
    fallbackIcon: 'a-icon-image-broken'
  }
};

export const Responsive: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    srcSet: 'https://picsum.photos/400/300 400w, https://picsum.photos/800/600 800w, https://picsum.photos/1200/900 1200w',
    sizes: '(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px',
    alt: 'Responsive image',
    width: '100%',
    maxWidth: 600
  }
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', padding: '20px' }}>
      {Array.from({ length: 6 }, (_, i) => (
        <Image
          key={i}
          src={`https://picsum.photos/300/200?random=${i + 10}`}
          alt={`Gallery image ${i + 1}`}
          aspectRatio="3/2"
          cover
          lazySrc={`https://picsum.photos/30/20?random=${i + 10}`}
        />
      ))}
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Small (100x100)</h4>
        <Image
          src="https://picsum.photos/200/200"
          alt="Small image"
          width={100}
          height={100}
          cover
        />
      </div>
      
      <div>
        <h4>Medium (200x150)</h4>
        <Image
          src="https://picsum.photos/400/300"
          alt="Medium image"
          width={200}
          height={150}
          cover
        />
      </div>
      
      <div>
        <h4>Large (400x300)</h4>
        <Image
          src="https://picsum.photos/800/600"
          alt="Large image"
          width={400}
          height={300}
          cover
        />
      </div>
    </div>
  )
};
