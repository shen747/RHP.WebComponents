import { render, screen } from '@testing-library/react';
import { ContentSplitter } from '../ContentSplitter';

describe('ContentSplitter', () => {
  it('renders content and classes', () => {
    render(<ContentSplitter variant="dashed" justify="end">x</ContentSplitter>);
    const el = screen.getByText('x');
    expect(el.closest('.rhp-content-splitter')).toHaveClass('rhp-content-splitter--dashed');
    expect(el.closest('.rhp-content-splitter')).toHaveClass('rhp-content-splitter--end');
  });
});

