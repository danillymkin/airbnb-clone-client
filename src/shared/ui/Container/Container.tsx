import React, { FunctionComponent } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

type Props = ContainerProps;

export const Container: FunctionComponent<Props> = ({
  children,
}): JSX.Element => {
  return (
    <div
      className={'lg: mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20'}
    >
      {children}
    </div>
  );
};
