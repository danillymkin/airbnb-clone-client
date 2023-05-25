import { render, screen } from '@testing-library/react';
import { Search } from './Search';

describe('Search', () => {
  it('should render search', () => {
    render(<Search />);
    const search = screen.getByRole('search');
    expect(search).toBeTruthy();
  });

  it('should match snapshot', () => {
    render(<Search />);
    const search = screen.getByRole('search');
    expect(search).toMatchSnapshot();
  });

  it('should have anywhere filter', () => {
    render(<Search />);
    const anywhere = screen.getByText(/anywhere/i);
    expect(anywhere).toBeInTheDocument();
  });

  it('should have any week filter', () => {
    render(<Search />);
    const anyWeek = screen.getByText(/any week/i);
    expect(anyWeek).toBeInTheDocument();
  });

  it('should have add guests filter', () => {
    render(<Search />);
    const addGuests = screen.getByText(/add guests/i);
    expect(addGuests).toBeInTheDocument();
  });

  it('should have search icon', () => {
    render(<Search />);
    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });
});
