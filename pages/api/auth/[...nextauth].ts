import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { cert } from 'firebase-admin/app';

export const authOptions = {
  // Configure one or more authentication providers
  //   adapter: FirestoreAdapter({
  //     credential: cert({
  //       projectId: process.env.FIREBASE_PROJECT_ID,
  //       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  //       privateKey: process.env.FIREBASE_PRIVATE_KEY,
  //     }),
  //   }),
  adapter: FirestoreAdapter(),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default NextAuth(authOptions);
