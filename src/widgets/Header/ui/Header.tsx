import React, { FunctionComponent } from 'react';
import { Container } from '@/shared/ui/Container';
import { Logo } from '@/shared/ui/Logo';
import { Search } from '@/features/Search';
import { UserMenu } from '@/features/UserMenu';

export const Header: FunctionComponent = ({}): JSX.Element => {
  return (
    <header
      data-testid={'header'}
      className={'fixed z-10 w-full bg-white shadow-sm'}
    >
      <div className={'border-b py-4'}>
        <Container>
          <div className={'flex items-center justify-between gap-3 md:gap-0'}>
            <div className={'hidden md:block'}>
              <Logo />
            </div>

            <Search />

            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};
