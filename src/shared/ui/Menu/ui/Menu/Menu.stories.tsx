import { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem } from '@/shared/ui/Menu';

const meta: Meta = {
  title: 'UI/Menu',
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <div className={'flex justify-end'}>
      <Menu trigger={'Menu'}>
        <MenuItem>Item 1</MenuItem>

        <MenuItem>Item 2</MenuItem>
      </Menu>
    </div>
  ),
};
