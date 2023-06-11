import { render, screen } from '@testing-library/react';
import { UserMenu } from '@/features/UserMenu';

describe('User Menu', () => {
  it('should render UserMenu', () => {
    render(<UserMenu />);
    const userMenu = screen.getByTestId('user-menu');
    expect(userMenu).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<UserMenu />);
    const userMenu = screen.getByTestId('user-menu');
    expect(userMenu).toMatchSnapshot();
  });

  it('should render your home button', () => {
    render(<UserMenu />);
    const yourHomeBtn = screen.getByText(/airbnb your home/i);
    expect(yourHomeBtn).toBeInTheDocument();
  });

  it('should render menu', () => {
    render(<UserMenu />);
    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });
});
