import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { addBookmark, removeBookmark } from '@/service/user';
import { withSessionUser } from '@/app/util/session';

export async function PUT(req: NextRequest) {
  return withSessionUser(async (user) => {
    
  const { id, bookmark } = await req.json();

  if (!id || bookmark == null) {
    return new Response('Bad Request', { status: 400 });
  }

  const request = bookmark ? addBookmark : removeBookmark;

  return request(id, user.id)
  .then(res => NextResponse.json(res))
  .catch(error => new Response(JSON.stringify(error) , {status: 500}))
  })
}
