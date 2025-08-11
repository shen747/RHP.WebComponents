import { fireEvent, render, screen } from '@testing-library/react';
import { UnitField } from '../UnitField';

describe('UnitField', () => {
  it('renders NumberField and Select, changes value', () => {
    const onChange = vi.fn();
    render(
      <UnitField
        value={{ magnitude: 5, unit: 'M' }}
        units={[
          { value: 'M', text: 'M', itemText: 'Meters' },
          { value: 'KM', text: 'KM', itemText: 'Kilometers' },
        ]}
        onChange={onChange}
      />
    );
    fireEvent.click(screen.getByRole('button')); // open select
    fireEvent.click(screen.getByRole('option', { name: 'Kilometers' }));
    expect(onChange).toHaveBeenCalledWith({ magnitude: 5, unit: 'KM' });
  });
});

