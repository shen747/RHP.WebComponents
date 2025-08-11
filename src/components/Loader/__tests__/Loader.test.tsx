import { render } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
  it('renders with spinner icon and classes', () => {
    const { container } = render(<Loader size="l" colorClassName="text-primary" />);
    const i = container.querySelector('i')!;
    expect(i).toHaveClass('rhp-loader', 'rhp-icon--l', 'text-primary');
  });
});

