import { render } from '@testing-library/react';
import { Calendar } from '../Calendar';

describe('Calendar', () => {
  it('renders placeholder', () => {
    const { container } = render(<Calendar />);
    expect(container.firstChild).toHaveClass('rhp-calendar');
  });
});

