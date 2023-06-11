import { render, screen } from '@testing-library/react';
import { Logo } from '@/shared/ui/Logo';

describe('Logo', () => {
  it('should render logo', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo).toBeTruthy();
  });

  it('should match snapshot', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo).toMatchSnapshot();
  });

  it('should have right alt', () => {
    render(<Logo />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeTruthy();
  });

  it('should have right src', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo.getAttribute('src')).toContain('logo.png');
  });
});
