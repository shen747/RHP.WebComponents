import { render, screen } from '@testing-library/react';
import { DisplayField } from '../DisplayField';

describe('DisplayField', () => {
  it('renders label and value', () => {
    render(<DisplayField label="L" value="V" />);
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('V')).toBeInTheDocument();
  });
});

