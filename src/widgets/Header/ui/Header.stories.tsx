import { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/widgets/Header';

const meta: Meta = {
  title: 'Widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
