import { fireEvent, render } from '@testing-library/react';
import { Slider } from '../Slider';

describe('Slider', () => {
  it('changes value and renders ticks', () => {
    const onChange = vi.fn();
    const { container } = render(<Slider value={10} onChange={onChange} showTicks ticks={[0, 10, 20]} />);
    const input = container.querySelector('input[type="range"]') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '20' } });
    expect(onChange).toHaveBeenCalledWith(20);
    expect(container.querySelector('datalist')).toBeTruthy();
  });
});

