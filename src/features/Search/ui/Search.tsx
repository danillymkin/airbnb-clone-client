import React, { FunctionComponent } from 'react';
import { BiSearch } from 'react-icons/bi';

export const Search: FunctionComponent = (): JSX.Element => {
  return (
    <div
      className={
        'w-full cursor-pointer rounded-full border py-2 shadow-sm transition hover:shadow-md md:w-auto'
      }
      role={'search'}
    >
      <div className={'flex items-center justify-between'}>
        <div className={'px-6 text-sm font-semibold'}>Anywhere</div>
        <div
          className={
            'hidden flex-1 border-x px-6 text-center text-sm font-semibold sm:block'
          }
        >
          Any Week
        </div>
        <div
          className={'flex items-center gap-3 pl-6 pr-2 text-sm text-gray-600'}
        >
          <div className={'hidden sm:block'}>Add Guests</div>
          <div className={'rounded-full bg-rose-500 p-2 text-white'}>
            <BiSearch role={'img'} />
          </div>
        </div>
      </div>
    </div>
  );
};
