'use client'

import React from 'react';
import Avatar from './Avatar';
import { AuthUser } from '@/model/user';

type Props ={
  user: AuthUser;
}

 export default function Sidebar({user : {name, email, image}}: Props) {
  const username = email?.split('@')[0];

  return <>
    <div className='flex items-center'>
      {image && <Avatar image={image} size={'medium'} />}
        <div className='ml-4'>
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
    </div>  
      
    <p className='text-sm text-neutral-500 mt-8'>About · Help · Press · API · Jobs · Privacy · Terms · Location · Language</p>
    <p className='font-bold text-sm mt-8 text-neutral-500'>@Copyright INSTANTGRAM from METAL</p>
  </>;
}