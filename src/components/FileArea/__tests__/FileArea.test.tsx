import { fireEvent, render, screen } from '@testing-library/react';
import { FileArea } from '../FileArea';

describe('FileArea', () => {
    it('calls onFiles on drop', () => {
        const onFiles = vi.fn();
        render(<FileArea onFiles={onFiles} />);
        const area = screen.getByText(/Drop files here/i);
        const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
        fireEvent.drop(area, { dataTransfer: { files: [file] } as any });
        expect(onFiles).toHaveBeenCalled();
    });
});
