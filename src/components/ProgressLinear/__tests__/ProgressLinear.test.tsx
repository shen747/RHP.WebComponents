import { render } from '@testing-library/react';
import { ProgressLinear } from '../ProgressLinear';

describe('ProgressLinear', () => {
  it('renders bar with width from value', () => {
    const { container } = render(<ProgressLinear value={25} />);
    const bar = container.querySelector('.rhp-progress-linear__bar') as HTMLElement;
    expect(bar.style.width).toBe('25%');
  });
});

