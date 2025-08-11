import { render, screen } from '@testing-library/react';
import { Modal } from '../Modal';

describe('Modal', () => {
  it('renders when open and passes through props', () => {
    render(<Modal open title="T">Body</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});

