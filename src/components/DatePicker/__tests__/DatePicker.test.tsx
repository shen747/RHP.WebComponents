import { fireEvent, render, screen } from '@testing-library/react';
import { DatePicker } from '../DatePicker';

describe('DatePicker', () => {
  it('renders and emits', () => {
    const onChange = vi.fn();
    render(<DatePicker value="2024-01-01" onChange={onChange} />);
    fireEvent.change(screen.getByDisplayValue('2024-01-01'), { target: { value: '2024-02-02' } });
    expect(onChange).toHaveBeenCalledWith('2024-02-02');
  });
});

