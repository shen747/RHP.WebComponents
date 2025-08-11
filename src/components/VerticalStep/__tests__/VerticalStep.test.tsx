import { render } from '@testing-library/react';
import { VerticalStep } from '../VerticalStep';

describe('VerticalStep', () => {
  it('renders marker, connector by stepType', () => {
    const { container, rerender } = render(<VerticalStep stepType="middle" />);
    expect(container.querySelector('.rhp-vertical-step__connector')).toBeTruthy();
    rerender(<VerticalStep stepType="last" />);
    expect(container.querySelector('.rhp-vertical-step__connector')).toBeFalsy();
  });
});

