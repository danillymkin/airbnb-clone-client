import React, { FunctionComponent } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Menu, MenuItem } from '@/shared/ui/Menu';
import { Avatar } from '@/shared/ui/Avatar';

export const UserMenu: FunctionComponent = (): JSX.Element => {
  return (
    <div className={'relative'} data-testid={'user-menu'}>
      <div className={'flex items-center gap-3'}>
        <div
          className={
            'hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block'
          }
        >
          Airbnb your home
        </div>

        <Menu
          trigger={
            <div
              className={
                'flex cursor-pointer items-center gap-3 rounded-full border border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1'
              }
            >
              <AiOutlineMenu />

              <div className={'hidden md:block'}>
                <Avatar />
              </div>
            </div>
          }
        >
          <MenuItem>Sign up</MenuItem>

          <MenuItem>Login</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
