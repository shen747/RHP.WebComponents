import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders copyright and links', () => {
    render(<Footer copyright="C" links={[{ id: 1, label: 'L', href: '#' }]} />);
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
  });
});

