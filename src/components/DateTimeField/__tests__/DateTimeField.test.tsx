import { render, screen } from '@testing-library/react';
import { DateTimeField } from '../DateTimeField';

describe('DateTimeField', () => {
  it('renders label and input', () => {
    render(<DateTimeField label="DateTime" value="2024-01-02T03:04" />);
    expect(screen.getByText('DateTime')).toBeInTheDocument();
    expect(document.querySelector('input[type="datetime-local"]')).toBeTruthy();
  });
});

