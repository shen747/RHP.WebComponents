import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('toggles in uncontrolled mode', () => {
    render(<Switch label="Test" />);
    const input = screen.getByRole('switch');
    expect(input).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(input);
    expect(input).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onChange with controlled value', () => {
    const onChange = vi.fn();
    render(<Switch checked={true} onChange={onChange} />);
    const input = screen.getByRole('switch');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledWith(false);
  });
});

