import { render, screen } from '@testing-library/react';
import { BottomNavigation } from '../BottomNavigation';

describe('BottomNavigation', () => {
  it('renders and can be hidden', () => {
    const { rerender } = render(<BottomNavigation value={true}>x</BottomNavigation>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    rerender(<BottomNavigation value={false}>x</BottomNavigation>);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });
});

