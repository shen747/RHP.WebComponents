import { render } from '@testing-library/react';
import { Masthead } from '../Masthead';

describe('Masthead', () => {
  it('renders title and actions', () => {
    const { container } = render(<Masthead title="T" actions={<button>A</button>} />);
    const el = container.querySelector('header')!;
    expect(el).toHaveClass('rhp-masthead');
    expect(el.querySelector('.rhp-masthead__title')!.textContent).toBe('T');
    expect(el.querySelector('.rhp-masthead__actions')!.textContent).toBe('A');
  });
});

