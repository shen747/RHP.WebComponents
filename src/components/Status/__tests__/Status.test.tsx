import { render, screen } from '@testing-library/react';
import { Status } from '../Status';

describe('Status', () => {
  it('renders label and sentiment classes', () => {
    const { container } = render(<Status label="Hello" sentiment="positive" variant="outlined" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(container.querySelector('.rhp-status--positive')).toBeTruthy();
    expect(container.querySelector('.rhp-status--outlined')).toBeTruthy();
  });
});

