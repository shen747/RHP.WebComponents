import { fireEvent, render, screen } from '@testing-library/react';
import { DropdownIconButton } from '../DropdownIconButton';

describe('DropdownIconButton', () => {
  it('opens and selects item', () => {
    const onSelect = vi.fn();
    render(<DropdownIconButton icon="a-icon-more-vert" ariaLabel="More" items={[{ id: 1, label: 'A', onSelect }]} />);
    fireEvent.click(screen.getByRole('button', { name: 'More' }));
    fireEvent.click(screen.getByRole('menuitem', { name: 'A' }));
    expect(onSelect).toHaveBeenCalled();
  });
});

