import withAuth, { NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req: any) {
    console.log(req.nextauth.token);
    if (
      req.nextUrl.pathname == '/admin' &&
      req.nextUrl?.token?.role !== 'admin'
    )
      return NextResponse.rewrite(new URL('/dest', req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
