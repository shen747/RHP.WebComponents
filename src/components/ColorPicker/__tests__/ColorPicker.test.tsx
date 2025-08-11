import { fireEvent, render, screen } from '@testing-library/react';
import { ColorPicker } from '../ColorPicker';

describe('ColorPicker', () => {
  it('changes color via inputs', () => {
    const onChange = vi.fn();
    render(<ColorPicker value="#123456" onChange={onChange} />);
    fireEvent.change(screen.getByLabelText('Color'), { target: { value: '#000000' } });
    expect(onChange).toHaveBeenCalledWith('#000000');
    fireEvent.change(screen.getByLabelText('Hex'), { target: { value: '#ffffff' } });
    expect(onChange).toHaveBeenCalledWith('#ffffff');
  });
});

