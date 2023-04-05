import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectMongo from '../../../../database/config';
import Users from '../../../../model/Schema';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';

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
          error: 'Connection Failed...!';
        });

        // check user existance
        const result = await Users.findOne({ email: credentials.email });

        if (!result) {
          throw new Error('No user Found with Email Please Sign Up...!');
        }
        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
  ],
  secret: 'XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=',
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async signIn({ user, account, email, credentials }) {
      const result = await Users.findOne({ email: email });

      console.log('🚀 ~ file: [...nextauth].js:53 ~ signIn ~ result:', result);

      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      // call the database here and get the user roles

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      token.role = 'user';
      return token;
    },
  },
});
