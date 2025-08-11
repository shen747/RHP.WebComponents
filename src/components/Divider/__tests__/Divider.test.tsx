import { render, screen } from '@testing-library/react';
import { Divider } from '../Divider';

describe('Divider', () => {
  it('renders a horizontal divider by default', () => {
    render(<Divider />);
    const el = screen.getByRole('separator');
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('renders a vertical divider', () => {
    render(<Divider orientation="vertical" />);
    const el = screen.getByRole('separator');
    expect(el).toHaveAttribute('aria-orientation', 'vertical');
  });
});

