import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Checkbox } from '..';

test('toggles checkbox', () => {
    let value = false;
    const onChange = (v: boolean) => (value = v as any);
    render(<Checkbox label="Accept" modelValue={value} onChange={onChange} />);
    const input = screen.getByRole('checkbox');
    fireEvent.click(input);
    expect(value).toBe(true);
});
