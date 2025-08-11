import { render } from '@testing-library/react';
import { ProgressCircular } from '../ProgressCircular';

describe('ProgressCircular', () => {
  it('renders with value and size', () => {
    const { container } = render(<ProgressCircular value={30} size={32} />);
    const el = container.querySelector('.rhp-progress-circular') as HTMLElement;
    expect(el.style.width).toBe('32px');
    expect(el.getAttribute('aria-valuenow')).toBe('30');
  });
});

