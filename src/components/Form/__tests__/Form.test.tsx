import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../Form';

describe('Form', () => {
  it('renders actions and emits submit', () => {
    const onSubmit = vi.fn((e) => e.preventDefault());
    render(<Form actions={<button type="submit">Submit</button>} onSubmit={onSubmit}>Body</Form>);
    fireEvent.click(screen.getByText('Submit'));
    expect(onSubmit).toHaveBeenCalled();
  });
});

