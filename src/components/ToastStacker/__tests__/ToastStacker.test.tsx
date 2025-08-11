import { render, screen } from '@testing-library/react';
import { ToastStacker } from '../ToastStacker';

describe('ToastStacker', () => {
  it('renders and can dismiss items', () => {
    const onToastsChange = vi.fn();
    render(<ToastStacker toasts={[{ id: 1, title: 'A', description: 'B', sentiment: 'info', timeout: 8000 }]} onToastsChange={onToastsChange} />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});

