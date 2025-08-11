import { render, screen } from '@testing-library/react';
import { AppBar } from '../AppBar';

describe('AppBar', () => {
  it('renders title', () => {
    render(<AppBar title="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});

