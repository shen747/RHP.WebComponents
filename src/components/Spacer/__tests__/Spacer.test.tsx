import { render } from '@testing-library/react';
import { Spacer } from '../Spacer';

describe('Spacer', () => {
  it('renders with default props', () => {
    const { container } = render(<Spacer />);
    expect(container.firstChild).toHaveClass('rhp-spacer');
  });
});

