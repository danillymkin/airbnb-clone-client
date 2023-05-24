import { Container } from './Container';
import { render, screen } from '@testing-library/react';

describe('Container', () => {
  it('should render container', () => {
    const children = 'Text';
    render(<Container>{children}</Container>);
    const container = screen.getByText(children);
    expect(container).toBeTruthy();
  });

  it('should render children', () => {
    const children = 'Text';
    render(<Container>{children}</Container>);
    const container = screen.getByText(children);
    expect(container).toHaveTextContent(children);
  });
});
