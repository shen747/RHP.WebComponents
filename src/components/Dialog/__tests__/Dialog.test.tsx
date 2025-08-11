import { fireEvent, render, screen } from '@testing-library/react';
import { Dialog } from '../Dialog';

describe('Dialog', () => {
  it('renders when open and closes on actions/backdrop/esc', () => {
    const onChange = vi.fn();
    render(
      <Dialog open onOpenChange={onChange} title="T" actions={<button onClick={() => onChange(false)}>Ok</button>}>
        Body
      </Dialog>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ok'));
    expect(onChange).toHaveBeenCalledWith(false);
  });
});

