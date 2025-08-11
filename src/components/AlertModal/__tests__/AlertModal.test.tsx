import { fireEvent, render, screen } from '@testing-library/react';
import { AlertModal } from '../AlertModal';

describe('AlertModal', () => {
  it('renders when open', () => {
    render(<AlertModal open title="Title" message="Message" />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
  });

  it('fires callbacks', () => {
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    render(<AlertModal open title="t" message="m" onConfirm={onConfirm} onCancel={onCancel} />);
    fireEvent.click(screen.getByText('OK'));
    fireEvent.click(screen.getByText('Cancel'));
    expect(onConfirm).toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalled();
  });
});

