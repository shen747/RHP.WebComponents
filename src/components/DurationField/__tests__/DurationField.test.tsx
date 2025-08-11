import { fireEvent, render, screen } from '@testing-library/react';
import { DurationField } from '../DurationField';

describe('DurationField', () => {
  it('updates minutes from hours/minutes inputs', () => {
    const onChange = vi.fn();
    render(<DurationField label="Duration" value={0} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Hours'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Minutes'), { target: { value: '15' } });
    expect(onChange).toHaveBeenCalledWith(135);
  });
});

