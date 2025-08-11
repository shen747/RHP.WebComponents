import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from '../IconButton';

describe('IconButton', () => {
    it('renders icon by class and aria-label', () => {
        render(<IconButton icon="a-icon-plus" ariaLabel="Add" />);
        const button = screen.getByRole('button', { name: 'Add' });
        expect(button).toBeInTheDocument();
        const icon = button.querySelector('span.rhp-icon');
        expect(icon).toBeTruthy();
        expect(icon!.className).toContain('a-icon-plus');
    });

    it('uses children string as aria-label fallback', () => {
        render(<IconButton>Delete</IconButton>);
        expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    });

    it('does not fire click when disabled', () => {
        const onClick = vi.fn();
        render(<IconButton ariaLabel="More" disabled onClick={onClick} />);
        const button = screen.getByRole('button', { name: 'More' });
        fireEvent.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });
});
