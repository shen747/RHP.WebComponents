import { render, screen } from '@testing-library/react';
import { Main } from '../Main';

describe('Main', () => {
  it('renders main element with class', () => {
    render(<Main>Content</Main>);
    const el = screen.getByText('Content');
    expect(el.tagName).toBe('MAIN');
    expect(el).toHaveClass('rhp-main');
  });
});

