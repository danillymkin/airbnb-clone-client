import { Meta, StoryObj } from '@storybook/react';
import { Container } from '@/shared/ui/Container';

const meta: Meta = {
  title: 'UI/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <div>Children</div>
    </Container>
  ),
};
