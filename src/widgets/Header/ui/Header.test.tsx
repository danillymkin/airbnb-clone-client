import { Header } from './Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toMatchSnapshot();
  });

  it('should render logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('should render search', () => {
    render(<Header />);
    const search = screen.getByRole('search');
    expect(search).toBeInTheDocument();
  });

  it('should render user menu', () => {
    render(<Header />);
    const userMenu = screen.getByTestId('user-menu');
    expect(userMenu).toBeInTheDocument();
  });
});
