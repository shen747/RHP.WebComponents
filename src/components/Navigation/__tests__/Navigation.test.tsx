import { render, screen, fireEvent } from '@testing-library/react';
import { Navigation } from '../Navigation';

describe('Navigation', () => {
  it('renders items and active state, handles click', () => {
    const onClick = vi.fn();
    render(<Navigation items={[{ id: '1', label: 'One', onClick }, { id: '2', label: 'Two', active: true }]} />);
    const two = screen.getByText('Two');
    expect(two.closest('li')).toHaveClass('is-active');
    fireEvent.click(screen.getByRole('button', { name: 'One' }));
    expect(onClick).toHaveBeenCalled();
  });
});

