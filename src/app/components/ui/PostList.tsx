'use client';

import { SimplePost } from '@/model/post';
import React from 'react';
import useSWR from 'swr';
import PostListCard from '../PostListCard';
import GridSpninner from './GridSpninner';

export default function PostList() {
  const { data: posts, isLoading: loading, error } = useSWR<SimplePost[]>('/api/posts');
 
  return <section>
    {loading && <div className='text-center mt-32'><GridSpninner /></div>}
    {posts &&
    <ul>
    {posts.map((post, index) => <li key={post.id} className='mb-4'><PostListCard post={post} priority={index < 2}/></li>)}
  </ul>
  }
  </section>;
}