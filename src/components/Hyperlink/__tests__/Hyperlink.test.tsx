import { render, screen } from '@testing-library/react';
import { Hyperlink } from '../Hyperlink';

describe('Hyperlink', () => {
  it('renders anchor with href and class', () => {
    render(<Hyperlink href="#target">Click me</Hyperlink>);
    const a = screen.getByText('Click me');
    expect(a.tagName).toBe('A');
    expect(a).toHaveClass('rhp-hyperlink');
    expect(a).toHaveAttribute('href', '#target');
  });
});

