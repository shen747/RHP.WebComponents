import { act, fireEvent, render, screen } from '@testing-library/react';
import { Toast } from '../Toast';

describe('Toast', () => {
  it('renders via activator and auto-dismisses after timeout', async () => {
    vi.useFakeTimers();
    const { container } = render(
      <Toast title="Hello" description="World" timeout={1000} activator={({ props }) => <button {...props}>Open</button>} />
    );
    fireEvent.click(screen.getByText('Open'));
    expect(container.querySelector('.rhp-toast')).toBeTruthy();
    await act(() => {
      vi.advanceTimersByTime(1100);
    });
    expect(container.querySelector('.rhp-toast')).toBeFalsy();
  });
});

