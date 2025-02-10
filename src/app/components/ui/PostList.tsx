'use client';

import PostListCard from '../PostListCard';
import GridSpninner from './GridSpninner';
import UsePosts from '@/hooks/posts';

export default function PostList() {
  const { posts, isLoading: loading, error } = UsePosts();
 
  return <section>
    {loading && <div className='text-center mt-32'><GridSpninner /></div>}
    {posts &&
    <ul>
    {posts.map((post, index) => <li key={post.id} className='mb-4'><PostListCard post={post} priority={index < 2}/></li>)}
  </ul>
  }
  </section>;
}