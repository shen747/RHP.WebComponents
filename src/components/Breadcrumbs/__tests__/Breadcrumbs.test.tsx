import { fireEvent, render, screen } from '@testing-library/react';
import { Breadcrumbs } from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  const items = [
    { caption: 'Home', href: '#' },
    { caption: 'Section', href: '#' },
    { caption: 'Subsection', href: '#' },
    { caption: 'Current' },
  ];

  it('renders mobile current only', () => {
    render(<Breadcrumbs items={items} isMobile />);
    expect(screen.getByText('Current')).toBeInTheDocument();
  });

  it('opens more menu for >3 items', () => {
    render(<Breadcrumbs items={items} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
});

