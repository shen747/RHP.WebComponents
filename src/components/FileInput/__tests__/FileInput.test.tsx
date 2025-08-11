import { fireEvent, render } from '@testing-library/react';
import { FileInput } from '../FileInput';

describe('FileInput', () => {
    it('calls onFiles on change', () => {
        const onFiles = vi.fn();
        const { container } = render(<FileInput onFiles={onFiles} />);
        const input = container.querySelector('input')!;
        const file = new File(['x'], 'x.txt', { type: 'text/plain' });
        fireEvent.change(input, { target: { files: [file] } });
        expect(onFiles).toHaveBeenCalled();
    });
});
