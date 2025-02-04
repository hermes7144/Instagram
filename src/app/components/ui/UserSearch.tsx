'use client';

import { FormEvent, useEffect, useState } from 'react';
import useSWR from 'swr';
import GridSpninner from './GridSpninner';
import { SearchUser } from '@/model/user';
import UserCard from './UserCard';
import useDebounce from '@/hooks/useDebounce';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const debouncedSearch = useDebounce(keyword);
  const { data: users, isLoading, error } = useSWR<SearchUser[]>(`/api/search/${debouncedSearch}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className='w-full max-w-2xl my-4 flex flex-col items-center'>
      <form className='w-full mb-4' onSubmit={onSubmit}>
        <input className='w-full text-xl p-3 outline-none border border-gray-400' autoFocus type='text' placeholder='Search for a username or name' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </form>
      {error && <p>무언가가 잘못 되었음</p>}
      {isLoading && <GridSpninner/>}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
      <ul className='w-full p-4'>
        {users && users.map(user => <li key={user.username}>
          <UserCard user={user} />
        </li>)}
      </ul>
    </section>
  );
}
