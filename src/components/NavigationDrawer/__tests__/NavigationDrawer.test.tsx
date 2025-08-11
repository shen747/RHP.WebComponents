import { render, screen } from '@testing-library/react';
import { NavigationDrawer } from '../NavigationDrawer';

describe('NavigationDrawer', () => {
  it('renders when open and shows title/content', () => {
    render(<NavigationDrawer open title="T">Body</NavigationDrawer>);
    expect(screen.getByText('T')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});

