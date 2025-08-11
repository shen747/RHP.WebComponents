import { fireEvent, render } from '@testing-library/react';
import { Draggable } from '../Draggable';

describe('Draggable', () => {
  it('emits position changes', () => {
    const onPositionChange = vi.fn();
    const { container } = render(
      <Draggable onPositionChange={onPositionChange}>
        <div style={{ width: 10, height: 10 }} />
      </Draggable>
    );
    const node = container.firstChild as HTMLElement;
    fireEvent.mouseDown(node, { clientX: 0, clientY: 0 });
    fireEvent.mouseMove(window, { clientX: 10, clientY: 15 });
    fireEvent.mouseUp(window);
    expect(onPositionChange).toHaveBeenCalled();
  });
});

