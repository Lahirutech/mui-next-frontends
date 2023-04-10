import { DefaultSession } from 'next-auth';

export enum Role {
  user = 'user',
}

declare module 'next-auth' {
  interface User {
    role?: Role;
  }
  interface Session extends DefaultSession {
    user?: User;
  }
}

// nextauth.d.ts
declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role;
  }
}
