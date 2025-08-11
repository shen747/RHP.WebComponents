import { render, screen } from '@testing-library/react';
import { ColorField } from '../ColorField';

describe('ColorField', () => {
  it('renders label and picker', () => {
    render(<ColorField label="Color" value="#111111" />);
    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(document.querySelector('.rhp-color-picker')).toBeTruthy();
  });
});

