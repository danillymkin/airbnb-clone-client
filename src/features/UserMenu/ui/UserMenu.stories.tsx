import { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from '@/features/UserMenu';

const meta: Meta = {
  title: 'Features/UserMenu',
  component: UserMenu,
};

export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {
  render: () => <UserMenu />,
};
