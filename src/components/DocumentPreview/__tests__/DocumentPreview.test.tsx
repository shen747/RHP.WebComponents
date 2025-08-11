import { render, screen } from '@testing-library/react';
import { DocumentPreview } from '../DocumentPreview';

describe('DocumentPreview', () => {
  it('renders image', () => {
    render(<DocumentPreview src="test.png" mimeType="image/png" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('renders fallback', () => {
    render(<DocumentPreview />);
    expect(screen.getByText('Preview not available')).toBeInTheDocument();
  });
});

