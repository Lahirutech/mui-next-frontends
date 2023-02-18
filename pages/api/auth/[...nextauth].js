import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectMongo from '../../../database/config';
import Users from '../../../model/Schema';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: 'Connection Failed...!' + error;
        });
        // check user existance
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error('No user found please dignup');
        }
        // compare the pass
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (checkPassword || result.email == credentials.email) {
          throw new Error('Username or Password doesnt match');
        }
        return result;
      },
    }),
  ],
});
