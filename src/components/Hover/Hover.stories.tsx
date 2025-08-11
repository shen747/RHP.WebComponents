import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Hover } from './';
import { Card } from '../Card';
import { Button } from '../Button';

const meta: Meta<typeof Hover> = {
  title: 'Components/Hover',
  component: Hover,
  parameters: {
    docs: {
      description: {
        component: 'A render prop component that provides hover state management for its children.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Hover>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Hover>
        {({ isHovered, hoverProps }) => (
          <div
            {...hoverProps}
            style={{
              padding: '20px',
              backgroundColor: isHovered ? '#e3f2fd' : '#f5f5f5',
              border: `2px solid ${isHovered ? '#2196f3' : '#ccc'}`,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            {isHovered ? 'Hovered!' : 'Hover over me'}
          </div>
        )}
      </Hover>
    </div>
  )
};

export const WithCard: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <Hover>
        {({ isHovered, hoverProps }) => (
          <Card
            {...hoverProps}
            style={{
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow: isHovered 
                ? '0 8px 24px rgba(0,0,0,0.15)' 
                : '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0' }}>Hover Card</h3>
              <p style={{ margin: 0, color: '#666' }}>
                This card has a hover effect that lifts it up and changes the shadow.
              </p>
            </div>
          </Card>
        )}
      </Hover>
    </div>
  )
};

export const WithButton: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Hover>
        {({ isHovered, hoverProps }) => (
          <Button
            {...hoverProps}
            variant={isHovered ? 'fill' : 'default'}
            sentiment={isHovered ? 'primary' : undefined}
            style={{
              transition: 'all 0.2s ease'
            }}
          >
            {isHovered ? 'Hovered Button' : 'Hover Button'}
          </Button>
        )}
      </Hover>
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <Hover disabled>
        {({ isHovered, hoverProps }) => (
          <div
            {...hoverProps}
            style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              border: '2px solid #ccc',
              borderRadius: '8px',
              textAlign: 'center',
              opacity: 0.6
            }}
          >
            Hover is disabled (isHovered: {isHovered.toString()})
          </div>
        )}
      </Hover>
    </div>
  )
};

export const WithCallback: Story = {
  render: () => {
    const [hoverCount, setHoverCount] = useState(0);
    
    return (
      <div style={{ padding: '20px' }}>
        <p>Hover count: {hoverCount}</p>
        <Hover onHoverChange={(isHovered) => {
          if (isHovered) {
            setHoverCount(count => count + 1);
          }
        }}>
          {({ isHovered, hoverProps }) => (
            <div
              {...hoverProps}
              style={{
                padding: '20px',
                backgroundColor: isHovered ? '#e8f5e8' : '#f5f5f5',
                border: `2px solid ${isHovered ? '#4caf50' : '#ccc'}`,
                borderRadius: '8px',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              Hover to increment counter
            </div>
          )}
        </Hover>
      </div>
    );
  }
};

export const MultipleElements: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {Array.from({ length: 4 }, (_, i) => (
        <Hover key={i}>
          {({ isHovered, hoverProps }) => (
            <div
              {...hoverProps}
              style={{
                width: '120px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isHovered ? '#fff3e0' : '#f5f5f5',
                border: `2px solid ${isHovered ? '#ff9800' : '#ccc'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              Item {i + 1}
            </div>
          )}
        </Hover>
      ))}
    </div>
  )
};

export const ImageGallery: Story = {
  render: () => (
    <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      {Array.from({ length: 6 }, (_, i) => (
        <Hover key={i}>
          {({ isHovered, hoverProps }) => (
            <div
              {...hoverProps}
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
            >
              <img
                src={`https://picsum.photos/300/200?random=${i + 20}`}
                alt={`Gallery image ${i + 1}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              {isHovered && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}
                >
                  View Image
                </div>
              )}
            </div>
          )}
        </Hover>
      ))}
    </div>
  )
};
