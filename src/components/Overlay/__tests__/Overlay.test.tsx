import { render } from '@testing-library/react';
import { Overlay } from '../Overlay';

describe('Overlay', () => {
  it('renders when visible', () => {
    const { container } = render(<Overlay visible />);
    expect(container.querySelector('.rhp-overlay')).toBeTruthy();
  });
});

