import { render } from '@testing-library/react';
import { Box } from '../Box';

describe('Box', () => {
  it('renders absolute positioning when props provided', () => {
    const { container } = render(<Box absolute top={10} left={5} />);
    expect(container.firstChild).toHaveStyle({ position: 'absolute', top: '10px', left: '5px' });
  });
});

