import { fireEvent, render, screen } from '@testing-library/react';
import { PasswordField } from '../PasswordField';

describe('PasswordField', () => {
  it('toggles visibility and passes value', () => {
    const onVisibleChange = vi.fn();
    const onValueChange = vi.fn();
    render(<PasswordField visible={false} onVisibleChange={onVisibleChange} value="x" onValueChange={onValueChange} />);
    const btn = screen.getByRole('button', { name: 'Show password' });
    fireEvent.click(btn);
    expect(onVisibleChange).toHaveBeenCalledWith(true);
  });
});

