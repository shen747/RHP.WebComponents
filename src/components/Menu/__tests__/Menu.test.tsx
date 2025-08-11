import { fireEvent, render, screen } from '@testing-library/react';
import { Menu } from '../Menu';

describe('Menu', () => {
  it('renders items and handles click', () => {
    const onClick = vi.fn();
    render(<Menu items={[{ id: '1', label: 'One', onClick }]} />);
    const btn = screen.getByRole('button', { name: 'One' });
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
});

