'use client';

import React, { FunctionComponent } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

interface MenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

type Props = MenuProps;

export const Menu: FunctionComponent<Props> = ({
  trigger,
  children,
}): JSX.Element => {
  return (
    <HeadlessMenu as={'div'} data-testid={'menu'} className={'relative'}>
      <HeadlessMenu.Button>{trigger}</HeadlessMenu.Button>

      <HeadlessMenu.Items
        className={
          'absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-52'
        }
      >
        {children}
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
