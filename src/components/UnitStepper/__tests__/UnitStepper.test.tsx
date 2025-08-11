import { fireEvent, render, screen } from '@testing-library/react';
import { UnitStepper } from '../UnitStepper';

describe('UnitStepper', () => {
  it('increments/decrements within bounds', () => {
    const onChange = vi.fn();
    render(<UnitStepper value={0} onChange={onChange} min={0} max={1} />);
    fireEvent.click(screen.getByRole('button', { name: 'Increase' }));
    expect(onChange).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByRole('button', { name: 'Decrease' }));
    expect(onChange).toHaveBeenCalledWith(0);
  });
});

