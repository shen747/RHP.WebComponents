import { fireEvent, render, screen } from '@testing-library/react';
import { DataTable } from '../DataTable';

type Row = { id: number; name: string; age: number };

const columns = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'age', header: 'Age', sortable: true },
] as const;

const sample: Row[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Carol', age: 35 },
];

describe('DataTable', () => {
  it('sorts data on header click', () => {
    render(<DataTable columns={columns as any} data={sample} pageSize={10} />);
    // click Age header to sort asc then desc
    const ageHeader = screen.getByRole('button', { name: 'Age' });
    fireEvent.click(ageHeader);
    let rows = screen.getAllByRole('row');
    // header + 3 rows
    expect(rows[1]).toHaveTextContent('25');
    fireEvent.click(ageHeader);
    rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('35');
  });

  it('paginates', () => {
    const data = Array.from({ length: 23 }, (_, i) => ({ id: i + 1, name: `N${i}`, age: i }));
    render(<DataTable columns={columns as any} data={data} pageSize={5} />);
    expect(screen.getByText('1 / 5')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('2 / 5')).toBeInTheDocument();
  });
});

