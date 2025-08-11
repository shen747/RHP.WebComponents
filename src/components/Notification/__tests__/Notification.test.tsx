import { fireEvent, render, screen } from '@testing-library/react';
import { Notification } from '../Notification';

describe('Notification', () => {
  it('renders title, content and closes', () => {
    const onClose = vi.fn();
    render(<Notification type="warning" title="Warn" onClose={onClose}>Body</Notification>);
    expect(screen.getByText('Warn')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalled();
  });
});

