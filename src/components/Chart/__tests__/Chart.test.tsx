import { render } from '@testing-library/react';
import { Chart } from '../Chart';

describe('Chart', () => {
  it('renders canvas and loading', () => {
    const { container, rerender } = render(<Chart />);
    expect(container.querySelector('canvas')).toBeTruthy();
    rerender(<Chart loading />);
    expect(container.querySelector('.rhp-chart__loading')).toBeTruthy();
  });
});

