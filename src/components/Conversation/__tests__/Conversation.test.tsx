import { render, screen } from '@testing-library/react';
import { Conversation } from '../Conversation';

describe('Conversation', () => {
  it('renders messages with mine class', () => {
    render(<Conversation messages={[{ id: '1', content: 'x' }, { id: '2', content: 'y', mine: true }]} />);
    expect(screen.getByText('x')).toBeInTheDocument();
    const y = screen.getByText('y');
    expect(y.closest('.rhp-conversation__message')).toHaveClass('rhp-conversation__message--mine');
  });
});

