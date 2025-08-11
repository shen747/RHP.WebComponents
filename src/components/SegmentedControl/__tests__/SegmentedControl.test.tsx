import { render, screen, fireEvent } from '@testing-library/react';
import { SegmentedControl, SegmentedControlButton } from '../';

describe('SegmentedControl', () => {
  it('renders correctly', () => {
    render(
      <SegmentedControl>
        <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
        <SegmentedControlButton value="option2">Option 2</SegmentedControlButton>
      </SegmentedControl>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('handles single selection', () => {
    const onChange = vi.fn();
    
    render(
      <SegmentedControl value="option1" onChange={onChange}>
        <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
        <SegmentedControlButton value="option2">Option 2</SegmentedControlButton>
      </SegmentedControl>
    );

    fireEvent.click(screen.getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith('option2');
  });

  it('handles multiple selection', () => {
    const onChange = vi.fn();
    
    render(
      <SegmentedControl value={['option1']} onChange={onChange} multiple>
        <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
        <SegmentedControlButton value="option2">Option 2</SegmentedControlButton>
      </SegmentedControl>
    );

    fireEvent.click(screen.getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith(['option1', 'option2']);
  });

  it('shows selected state correctly', () => {
    render(
      <SegmentedControl value="option1">
        <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
        <SegmentedControlButton value="option2">Option 2</SegmentedControlButton>
      </SegmentedControl>
    );

    const option1Button = screen.getByText('Option 1').closest('button');
    const option2Button = screen.getByText('Option 2').closest('button');

    expect(option1Button).toHaveClass('rhp-button--selected');
    expect(option2Button).not.toHaveClass('rhp-button--selected');
  });

  it('handles disabled buttons', () => {
    const onChange = vi.fn();
    
    render(
      <SegmentedControl onChange={onChange}>
        <SegmentedControlButton value="option1">Option 1</SegmentedControlButton>
        <SegmentedControlButton value="option2" disabled>Option 2</SegmentedControlButton>
      </SegmentedControl>
    );

    const disabledButton = screen.getByText('Option 2').closest('button');
    expect(disabledButton).toBeDisabled();

    fireEvent.click(disabledButton!);
    expect(onChange).not.toHaveBeenCalled();
  });
});
