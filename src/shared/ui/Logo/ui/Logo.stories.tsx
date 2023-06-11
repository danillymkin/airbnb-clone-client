import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@/shared/ui/Logo';

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />,
};
