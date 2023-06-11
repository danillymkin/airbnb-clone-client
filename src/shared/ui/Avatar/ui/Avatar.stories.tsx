import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta = {
  title: 'UI/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => <Avatar />,
};
