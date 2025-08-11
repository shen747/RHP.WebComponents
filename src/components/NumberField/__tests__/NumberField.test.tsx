import { fireEvent, render } from '@testing-library/react';
import { NumberField } from '../NumberField';

describe('NumberField', () => {
  it('calls onValueChange with clamped numbers', () => {
    const onValueChange = vi.fn();
    const { container } = render(<NumberField value={5} onValueChange={onValueChange} min={0} max={10} />);
    const input = container.querySelector('input')!;
    fireEvent.change(input, { target: { value: '12' } });
    expect(onValueChange).toHaveBeenCalledWith(10);
    fireEvent.change(input, { target: { value: '-1' } });
    expect(onValueChange).toHaveBeenCalledWith(0);
  });
});

