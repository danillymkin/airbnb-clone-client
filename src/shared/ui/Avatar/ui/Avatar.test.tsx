import { render, screen } from '@testing-library/react';
import { Avatar } from '@/shared/ui/Avatar';

describe('Avatar', () => {
  it('should render avatar', () => {
    render(<Avatar />);
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<Avatar />);
    const avatar = screen.getByRole('img');
    expect(avatar).toMatchSnapshot();
  });
});
