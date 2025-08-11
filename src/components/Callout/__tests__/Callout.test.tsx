import { fireEvent, render, screen } from '@testing-library/react';
import { Callout } from '../Callout';

describe('Callout', () => {
  it('renders and dismisses', () => {
    const onOpenChange = vi.fn();
    const onClose = vi.fn();
    render(<Callout title="t" description="d" dismissible onOpenChange={onOpenChange} onClose={onClose} />);
    expect(screen.getByText('t')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Close'));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onClose).toHaveBeenCalled();
  });
});

