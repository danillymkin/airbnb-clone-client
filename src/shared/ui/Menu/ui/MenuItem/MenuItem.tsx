'use client';

import React, { FunctionComponent } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';

interface MenuItemProps {
  onClick?: () => void;
  children: React.ReactNode;
}

type Props = MenuItemProps;

export const MenuItem: FunctionComponent<Props> = ({
  children,
  onClick,
}): JSX.Element => {
  return (
    <HeadlessMenu.Item
      as={'div'}
      onClick={onClick}
      className={'px-4 py-3 font-semibold transition hover:bg-neutral-100'}
    >
      {children}
    </HeadlessMenu.Item>
  );
};
