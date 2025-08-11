import { render, screen } from '@testing-library/react';
import { DocumentViewer } from '../DocumentViewer';

describe('DocumentViewer', () => {
  it('renders empty when no src', () => {
    render(<DocumentViewer />);
    expect(screen.getByText('No document')).toBeInTheDocument();
  });
});

