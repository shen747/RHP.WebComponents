import { fireEvent, render, screen } from '@testing-library/react';
import { Expander } from '../Expander';

describe('Expander', () => {
  it('toggles content visibility', () => {
    render(<Expander title="T">C</Expander>);
    expect(screen.queryByText('C')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /T/ }));
    expect(screen.getByText('C')).toBeInTheDocument();
  });
});

