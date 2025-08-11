import { fireEvent, render, screen } from '@testing-library/react';
import { Drawer } from '../Drawer';

describe('Drawer', () => {
  it('renders when open and closes on backdrop', () => {
    const onChange = vi.fn();
    render(
      <Drawer open onOpenChange={onChange} title="Menu">Hello</Drawer>
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    fireEvent.click(document.querySelector('.rhp-drawer__backdrop')!);
    expect(onChange).toHaveBeenCalledWith(false);
  });
});

