import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';

describe('Avatar', () => {
  it('renders initials when no src', () => {
    render(<Avatar name="John Smith" />);
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('renders image when src provided', () => {
    render(<Avatar src="/img.png" alt="User" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img.png');
    expect(img).toHaveAttribute('alt', 'User');
  });
});

