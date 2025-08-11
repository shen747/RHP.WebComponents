import { render } from '@testing-library/react';
import { Col } from '../Col';

describe('Col', () => {
  it('applies grid classes', () => {
    const { container } = render(<Col cols={6} md={4} offset={2} />);
    expect(container.firstChild).toHaveClass('col-6');
    expect(container.firstChild).toHaveClass('col-md-4');
    expect(container.firstChild).toHaveClass('offset-2');
  });
});

