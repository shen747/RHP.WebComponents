import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from '../TextField';

describe('TextField', () => {
    it('renders with placeholder', () => {
        render(<TextField placeholder="Enter text" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('calls onValueChange and applies upper characterCasing', () => {
        const onValueChange = vi.fn();
        render(<TextField placeholder="Upper" characterCasing="upper" onValueChange={onValueChange} />);
        const input = screen.getByPlaceholderText('Upper') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'abc' } });

        expect(onValueChange).toHaveBeenCalledWith('ABC');
        expect(input.value).toBe('ABC');
    });

    it('invokes onTrailingClick when trailing icon is clicked', () => {
        const onTrailingClick = vi.fn();
        const { container } = render(
            <TextField placeholder="Search" trailingIcon="a-icon-search" onTrailingClick={onTrailingClick} />
        );

        // Icon is aria-hidden and renders as <i> with classes; query via container
        const trailing = container.querySelector('.rhp-input__trailing-content i.rhp-icon');
        expect(trailing).toBeTruthy();
        fireEvent.click(trailing!);
        expect(onTrailingClick).toHaveBeenCalled();
    });
});
