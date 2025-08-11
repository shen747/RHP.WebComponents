import { fireEvent, render, screen } from '@testing-library/react';
import { DropdownButton } from '../DropdownButton';

describe('DropdownButton', () => {
  it('opens and selects item', () => {
    const onSelect = vi.fn();
    render(<DropdownButton items={[{ id: 1, label: 'A', onSelect }]}>
      Open
    </DropdownButton>);
    fireEvent.click(screen.getByRole('button', { name: 'Open' }));
    fireEvent.click(screen.getByRole('menuitem', { name: 'A' }));
    expect(onSelect).toHaveBeenCalled();
  });
});

