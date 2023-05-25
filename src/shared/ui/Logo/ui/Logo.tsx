'use client';

import React, { FunctionComponent } from 'react';
import Image from 'next/image';

interface LogoProps {}

type Props = LogoProps;

export const Logo: FunctionComponent<Props> = ({}): JSX.Element => {
  return (
    <Image
      alt={'Logo'}
      className={'hidden cursor-pointer md:block'}
      height={31}
      width={100}
      src={'/images/logo.png'}
      priority
    />
  );
};
