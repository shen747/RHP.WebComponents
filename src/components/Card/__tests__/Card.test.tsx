import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders anchor when href provided', () => {
    render(<Card href="#">x</Card>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

