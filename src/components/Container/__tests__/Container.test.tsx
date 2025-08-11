import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

describe('Container', () => {
  it('applies layout classes and alignment', () => {
    render(<Container layout="fill grid" align="left">X</Container>);
    const el = screen.getByText('X');
    const root = el.closest('.rhp-container')!;
    expect(root.className).toMatch('rhp-layout-fill');
    expect(root.className).toMatch('rhp-layout-grid');
    expect(root.className).toMatch('ml-0');
  });
});

