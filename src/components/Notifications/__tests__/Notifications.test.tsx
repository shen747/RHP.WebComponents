import { render } from '@testing-library/react';
import { Notifications } from '../Notifications';

describe('Notifications', () => {
  it('renders list of notifications', () => {
    const { container } = render(<Notifications items={[{ id: '1', title: 'T', children: 'C' } as any]} />);
    expect(container.querySelectorAll('.rhp-notification')).toHaveLength(1);
  });
});

