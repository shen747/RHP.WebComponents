import { render, screen } from '@testing-library/react';
import { RichTextEditor } from '../RichTextEditor';

describe('RichTextEditor', () => {
  it('renders textarea', () => {
    render(<RichTextEditor placeholder="Type" />);
    expect(screen.getByPlaceholderText('Type')).toBeInTheDocument();
  });
});

