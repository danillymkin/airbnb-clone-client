import { Container } from './Container';
import { render } from '@testing-library/react';

describe('Container', () => {
  it('should render container', () => {
    const { baseElement } = render(<Container>Text</Container>);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const children = 'Text';
    const { baseElement } = render(<Container>{children}</Container>);
    expect(baseElement).toHaveTextContent(children);
  });
});
