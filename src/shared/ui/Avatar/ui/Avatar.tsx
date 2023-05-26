import React, { FunctionComponent } from 'react';
import Image from 'next/image';

interface AvatarProps {}

type Props = AvatarProps;

export const Avatar: FunctionComponent<Props> = ({}): JSX.Element => {
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
