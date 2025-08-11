import { render, screen } from '@testing-library/react';
import { Recent } from '../Recent';

describe('Recent', () => {
  it('renders sections and respects maxEntries', () => {
    render(<Recent favorites={[{ id: '1', caption: 'A' }, { id: '2', caption: 'B' }]} recents={[{ id: '3', caption: 'C' }]} maxEntries={1} />);
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Recents')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.queryByText('B')).toBeNull();
    expect(screen.getByText('C')).toBeInTheDocument();
  });
});

