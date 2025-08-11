import { render, screen } from '@testing-library/react';
import { Flag } from '../Flag';

describe('Flag', () => {
  it('renders label', () => {
    render(<Flag label="Country" />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
});

