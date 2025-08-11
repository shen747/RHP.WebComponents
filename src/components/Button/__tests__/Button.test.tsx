import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '..';

test('renders button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});

test('renders as link when href provided and not disabled', () => {
    render(
        <Button href="#" target="_blank">
            Go
        </Button>
    );
    const link = screen.getByRole('link', { name: /go/i });
    expect(link).toBeInTheDocument();
});
