import { render } from '@testing-library/react';
import { ActionBar } from '../ActionBar';

describe('ActionBar', () => {
  it('renders children', () => {
    const { getByText } = render(<ActionBar>Hi</ActionBar>);
    expect(getByText('Hi')).toBeInTheDocument();
  });
});

