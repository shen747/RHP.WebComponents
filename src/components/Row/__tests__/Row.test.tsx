import { render } from '@testing-library/react';
import { Row } from '../Row';

describe('Row', () => {
  it('applies classes', () => {
    const { container } = render(<Row align="center" justify="end" noGutters fillAvailable />);
    const el = container.querySelector('.rhp-row') as HTMLElement;
    expect(el.className).toMatch('rhp-row--align-center');
    expect(el.className).toMatch('rhp-row--justify-end');
    expect(el.className).toMatch('rhp-row--no-gutters');
    expect(el.className).toMatch('rhp-row--fill-available');
  });
});

