import { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta = {
  title: 'Features/Search',
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: () => <Search />,
};
