'use client';

import React, { FunctionComponent } from 'react';
import Image from 'next/image';

export const Logo: FunctionComponent = (): JSX.Element => {
  return (
    <Image
      alt={'Logo'}
      className={'block cursor-pointer'}
      height={31}
      width={100}
      src={'/images/logo.png'}
      priority
    />
  );
};
