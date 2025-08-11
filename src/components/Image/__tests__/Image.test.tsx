import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Image } from '../';

describe('Image', () => {
  it('renders correctly with basic props', () => {
    render(<Image src="test.jpg" alt="Test image" />);
    
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test.jpg');
  });

  it('applies cover class when cover prop is true', () => {
    render(<Image src="test.jpg" alt="Test image" cover />);
    
    const container = screen.getByAltText('Test image').closest('.rhp-image');
    expect(container).toHaveClass('rhp-image--cover');
  });

  it('shows lazy loading placeholder when lazySrc is provided', () => {
    render(<Image src="test.jpg" lazySrc="lazy.jpg" alt="Test image" />);
    
    const lazyImg = document.querySelector('.rhp-image__lazy');
    expect(lazyImg).toBeInTheDocument();
    expect(lazyImg).toHaveAttribute('src', 'lazy.jpg');
  });

  it('handles image load event', async () => {
    const onLoad = vi.fn();
    render(<Image src="test.jpg" alt="Test image" onLoad={onLoad} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    
    expect(onLoad).toHaveBeenCalled();
    
    await waitFor(() => {
      const container = img.closest('.rhp-image');
      expect(container).toHaveClass('rhp-image--loaded');
    });
  });

  it('handles image error with fallback image', () => {
    const onError = vi.fn();
    render(
      <Image 
        src="invalid.jpg" 
        fallbackImage="fallback.jpg" 
        alt="Test image" 
        onError={onError} 
      />
    );
    
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    
    expect(onError).toHaveBeenCalled();
    // After error, the src should change to fallback
    expect(img).toHaveAttribute('src', 'fallback.jpg');
  });

  it('shows fallback icon when image fails and no fallback image', () => {
    render(<Image src="invalid.jpg" alt="Test image" fallbackIcon="a-icon-error" />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.error(img);
    
    const fallbackContainer = document.querySelector('.rhp-image--error');
    expect(fallbackContainer).toBeInTheDocument();
    
    const fallbackIcon = document.querySelector('.rhp-image__fallback');
    expect(fallbackIcon).toBeInTheDocument();
  });

  it('applies aspect ratio style', () => {
    render(<Image src="test.jpg" alt="Test image" aspectRatio="16/9" />);
    
    const container = screen.getByAltText('Test image').closest('.rhp-image');
    expect(container).toHaveStyle({ aspectRatio: '16/9' });
  });

  it('applies size styles correctly', () => {
    render(
      <Image 
        src="test.jpg" 
        alt="Test image" 
        width={300} 
        height={200}
        maxWidth={500}
        minWidth={100}
      />
    );
    
    const container = screen.getByAltText('Test image').closest('.rhp-image');
    expect(container).toHaveStyle({
      width: '300px',
      height: '200px',
      maxWidth: '500px',
      minWidth: '100px'
    });
  });

  it('renders children content', () => {
    render(
      <Image src="test.jpg" alt="Test image">
        <div data-testid="child-content">Overlay content</div>
      </Image>
    );
    
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Overlay content')).toBeInTheDocument();
  });

  it('applies gradient background when gradient prop is provided', () => {
    const gradient = 'linear-gradient(45deg, red, blue)';
    render(<Image src="test.jpg" alt="Test image" gradient={gradient} />);
    
    const container = screen.getByAltText('Test image').closest('.rhp-image');
    expect(container).toHaveStyle({ background: gradient });
  });
});
