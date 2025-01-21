'use client';

import { DetailUser } from '@/model/user';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from './Avatar';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  // const users = data?.following;
  // const users = undefined;

  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ]

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h[90px] overflow-x-hidden'>
      {isLoading ? <PropagateLoader size={8} color='red' /> : (!users || users.length === 0) && <p>{`You don't have followings`}</p>}
      {users && users.length > 0 && (
        <ul className='w-full flex gap-2'>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link className='flex flex-col items-center w-20' href={`/user/${username}`}>
                <Avatar image={image} highlight />
                <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
