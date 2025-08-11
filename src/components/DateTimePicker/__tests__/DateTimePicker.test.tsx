import { fireEvent, render, screen } from '@testing-library/react';
import { DateTimePicker } from '../DateTimePicker';

describe('DateTimePicker', () => {
  it('renders and emits', () => {
    const onChange = vi.fn();
    render(<DateTimePicker value="2024-01-01T10:00" onChange={onChange} />);
    fireEvent.change(screen.getByDisplayValue('2024-01-01T10:00'), { target: { value: '2024-02-02T09:15' } });
    expect(onChange).toHaveBeenCalledWith('2024-02-02T09:15');
  });
});

