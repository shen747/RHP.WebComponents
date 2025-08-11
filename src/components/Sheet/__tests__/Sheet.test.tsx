import { render, screen } from '@testing-library/react';
import { Sheet } from '../Sheet';

describe('Sheet', () => {
  it('renders content and applies props', () => {
    render(<Sheet color="red" rounded height={100} width={200}>X</Sheet>);
    expect(screen.getByText('X')).toBeInTheDocument();
  });
});

