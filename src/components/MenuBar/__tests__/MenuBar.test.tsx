import { fireEvent, render, screen } from '@testing-library/react';
import { MenuBar } from '../MenuBar';

describe('MenuBar', () => {
  it('renders items and marks active, handles click', () => {
    const onClick = vi.fn();
    render(<MenuBar items={[{ id: '1', label: 'One', onClick }, { id: '2', label: 'Two', active: true }]} />);
    const one = screen.getByRole('button', { name: 'One' });
    const two = screen.getByRole('button', { name: 'Two' });
    fireEvent.click(one);
    expect(onClick).toHaveBeenCalled();
    expect(two).toHaveClass('is-active');
  });
});

