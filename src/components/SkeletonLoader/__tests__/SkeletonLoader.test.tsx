import { render, screen } from '@testing-library/react';
import { SkeletonLoader } from '../SkeletonLoader';

describe('SkeletonLoader', () => {
  it('renders placeholder when loading', () => {
    const { container } = render(<SkeletonLoader loading height={10} width={20} />);
    expect(container.querySelector('.rhp-skeleton')).toBeTruthy();
  });
  it('renders children when not loading', () => {
    render(<SkeletonLoader loading={false}>Hello</SkeletonLoader>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});

