import { render, screen } from '@testing-library/react';
import { ProgressDialog } from '../ProgressDialog';

describe('ProgressDialog', () => {
  it('renders dialog with progress', () => {
    render(<ProgressDialog open title="Loading" value={40}>Text</ProgressDialog>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});

