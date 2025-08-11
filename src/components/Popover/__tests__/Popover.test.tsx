import { render } from '@testing-library/react';
import { Popover } from '../Popover';

describe('Popover', () => {
  it('renders when open', () => {
    const { container } = render(<Popover open>Hi</Popover>);
    expect(container.querySelector('.rhp-popover')).toBeTruthy();
  });
});

