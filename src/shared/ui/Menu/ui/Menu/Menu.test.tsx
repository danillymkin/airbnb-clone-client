import { render, screen } from '@testing-library/react';
import { Menu, MenuItem } from '@/shared/ui/Menu';

describe('Menu', () => {
  it('should render menu', () => {
    render(
      <Menu trigger={''}>
        <MenuItem>item</MenuItem>
      </Menu>
    );
    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  it('should render menu trigger', () => {
    const trigger = 'trigger';
    render(
      <Menu trigger={trigger}>
        <MenuItem>item</MenuItem>
      </Menu>
    );
    const menu = screen.getByRole('button');
    expect(menu).toHaveTextContent(trigger);
  });
});
