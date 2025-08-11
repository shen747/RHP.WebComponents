import { render } from '@testing-library/react';
import { Icon } from '../Icon';

describe('Icon', () => {
  it('applies icon classes and size', () => {
    const { container } = render(<Icon icon="a-icon-close" size="l" />);
    const i = container.querySelector('i')!;
    expect(i).toHaveClass('rhp-icon', 'rhp-icon--l', 'a-icon-close');
  });
});

