import { render, fireEvent } from '@testing-library/react';
import { Hover } from '../';

describe('Hover', () => {
  it('renders children with hover props', () => {
    const mockChildren = vi.fn(() => <div>Test content</div>);
    
    render(<Hover>{mockChildren}</Hover>);
    
    expect(mockChildren).toHaveBeenCalledWith({
      isHovered: false,
      hoverProps: {
        onMouseEnter: expect.any(Function),
        onMouseLeave: expect.any(Function)
      }
    });
  });

  it('updates hover state on mouse enter and leave', () => {
    const mockChildren = vi.fn(({ isHovered, hoverProps }) => (
      <div data-testid="hover-target" {...hoverProps}>
        {isHovered ? 'Hovered' : 'Not hovered'}
      </div>
    ));
    
    const { getByTestId } = render(<Hover>{mockChildren}</Hover>);
    
    const target = getByTestId('hover-target');
    
    // Initially not hovered
    expect(target).toHaveTextContent('Not hovered');
    
    // Mouse enter
    fireEvent.mouseEnter(target);
    expect(target).toHaveTextContent('Hovered');
    
    // Mouse leave
    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('Not hovered');
  });

  it('calls onHoverChange callback when hover state changes', () => {
    const onHoverChange = vi.fn();
    const mockChildren = vi.fn(({ hoverProps }) => (
      <div data-testid="hover-target" {...hoverProps} />
    ));
    
    const { getByTestId } = render(
      <Hover onHoverChange={onHoverChange}>{mockChildren}</Hover>
    );
    
    const target = getByTestId('hover-target');
    
    // Mouse enter
    fireEvent.mouseEnter(target);
    expect(onHoverChange).toHaveBeenCalledWith(true);
    
    // Mouse leave
    fireEvent.mouseLeave(target);
    expect(onHoverChange).toHaveBeenCalledWith(false);
    
    expect(onHoverChange).toHaveBeenCalledTimes(2);
  });

  it('does not update hover state when disabled', () => {
    const onHoverChange = vi.fn();
    const mockChildren = vi.fn(({ isHovered, hoverProps }) => (
      <div data-testid="hover-target" {...hoverProps}>
        {isHovered ? 'Hovered' : 'Not hovered'}
      </div>
    ));
    
    const { getByTestId } = render(
      <Hover disabled onHoverChange={onHoverChange}>{mockChildren}</Hover>
    );
    
    const target = getByTestId('hover-target');
    
    // Should always show not hovered when disabled
    expect(target).toHaveTextContent('Not hovered');
    
    // Mouse enter should not change state
    fireEvent.mouseEnter(target);
    expect(target).toHaveTextContent('Not hovered');
    expect(onHoverChange).not.toHaveBeenCalled();
    
    // Mouse leave should not change state
    fireEvent.mouseLeave(target);
    expect(target).toHaveTextContent('Not hovered');
    expect(onHoverChange).not.toHaveBeenCalled();
  });

  it('respects defaultHovered prop', () => {
    const mockChildren = vi.fn(({ isHovered }) => (
      <div>{isHovered ? 'Hovered' : 'Not hovered'}</div>
    ));
    
    const { container } = render(
      <Hover defaultHovered>{mockChildren}</Hover>
    );
    
    expect(container).toHaveTextContent('Hovered');
  });

  it('disabled prop overrides defaultHovered', () => {
    const mockChildren = vi.fn(({ isHovered }) => (
      <div>{isHovered ? 'Hovered' : 'Not hovered'}</div>
    ));
    
    const { container } = render(
      <Hover defaultHovered disabled>{mockChildren}</Hover>
    );
    
    expect(container).toHaveTextContent('Not hovered');
  });

  it('provides stable hover props references', () => {
    const mockChildren = vi.fn(() => <div />);
    
    const { rerender } = render(<Hover>{mockChildren}</Hover>);
    
    const firstCall = mockChildren.mock.calls[0][0];
    
    rerender(<Hover>{mockChildren}</Hover>);
    
    const secondCall = mockChildren.mock.calls[1][0];
    
    // The hover props should be the same reference for performance
    expect(firstCall.hoverProps.onMouseEnter).toBe(secondCall.hoverProps.onMouseEnter);
    expect(firstCall.hoverProps.onMouseLeave).toBe(secondCall.hoverProps.onMouseLeave);
  });
});
