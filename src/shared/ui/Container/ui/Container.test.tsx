import { render, screen } from '@testing-library/react';
import { Container } from '@/shared/ui/Container';

describe('Container', () => {
  it('should render container', () => {
    const children = 'Text';
    render(<Container>{children}</Container>);
    const container = screen.getByText(children);
    expect(container).toBeTruthy();
  });

  it('should match snapshot', () => {
    const children = 'Text';
    render(<Container>{children}</Container>);
    const container = screen.getByText(children);
    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    const children = 'Text';
    render(<Container>{children}</Container>);
    const container = screen.getByText(children);
    expect(container).toHaveTextContent(children);
  });
});
