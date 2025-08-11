import { fireEvent, render, screen } from '@testing-library/react';
import { Tabs } from '../Tabs';

describe('Tabs', () => {
  it('selects tab on click', () => {
    const onChange = vi.fn();
    render(<Tabs items={[{id:'one',label:'One'},{id:'two',label:'Two'}]} onChange={onChange}>X</Tabs>);
    fireEvent.click(screen.getByRole('tab', { name: 'Two' }));
    expect(onChange).toHaveBeenCalledWith('two');
  });
});

