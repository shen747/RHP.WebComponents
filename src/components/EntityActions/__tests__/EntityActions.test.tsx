import { fireEvent, render, screen } from '@testing-library/react';
import { EntityActions } from '../EntityActions';

describe('EntityActions', () => {
  it('renders actions and triggers onClick', () => {
    const onClick = vi.fn();
    render(<EntityActions actions={[{ id: 1, label: 'A', onClick }]} />);
    fireEvent.click(screen.getByText('A'));
    expect(onClick).toHaveBeenCalled();
  });
});

