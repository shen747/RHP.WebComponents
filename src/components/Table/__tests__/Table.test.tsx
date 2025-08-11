import { render } from '@testing-library/react';
import { Table } from '../Table';

describe('Table', () => {
  it('renders with hover and height', () => {
    const { container } = render(<Table hover height={100}><table /></Table>);
    const root = container.querySelector('.rhp-table') as HTMLElement;
    expect(root).toBeTruthy();
  });
});

