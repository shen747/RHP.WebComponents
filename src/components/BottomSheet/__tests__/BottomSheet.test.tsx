import { fireEvent, render, screen } from '@testing-library/react';
import { BottomSheet } from '../BottomSheet';

describe('BottomSheet', () => {
  it('renders when open and closes on backdrop', () => {
    const onChange = vi.fn();
    render(
      <BottomSheet open persistent={false} onOpenChange={onChange}>
        <div>Body</div>
      </BottomSheet>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('dialog').querySelector('.rhp-bottom-sheet__backdrop')!);
    expect(onChange).toHaveBeenCalledWith(false);
  });
});

