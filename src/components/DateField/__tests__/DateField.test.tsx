import { render, screen } from '@testing-library/react';
import { DateField } from '../DateField';

describe('DateField', () => {
  it('renders label and input', () => {
    render(<DateField label="Date" value="2024-01-02" />);
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(document.querySelector('input[type="date"]')).toBeTruthy();
  });
});

