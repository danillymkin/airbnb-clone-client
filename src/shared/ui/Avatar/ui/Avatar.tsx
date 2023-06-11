import React, { FunctionComponent } from 'react';
import Image from 'next/image';

export const Avatar: FunctionComponent = (): JSX.Element => {
  return (
    <Image
      className={'rounded-full'}
      src={'/images/avatar-fallback.jpg'}
      width={30}
      height={30}
      alt={'Avatar'}
    />
  );
};
