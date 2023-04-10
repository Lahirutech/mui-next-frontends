import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectMongo from '../../../../database/config';
import Users from '../../../../model/Schema';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '../../../dbOperations/dbOperations';
import { UserType } from '../../../types/dboperationTypes';

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, _req) {
        connectMongo().catch((_error) => {
          error: 'Connection Failed...!';
        });
        try {
          // check user existance
          const result = await Users.findOne({ email: credentials?.email });

          if (!result) {
            throw new Error('No user Found with Email Please Sign Up...!');
          }
          // compare()
          if (credentials && credentials.password) {
            const checkPassword = await compare(
              credentials.password,
              result.password
            );
            // incorrect password
            if (!checkPassword || result.email !== credentials?.email) {
              throw new Error("Username or Password doesn't match");
            }
          }
        } catch (e: any) {
          return null;
        }
      },
    }),
  ],
  secret: 'XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=',
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async signIn({ user, account, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      connectMongo().catch((_error) => {
        error: 'Connection Failed...!';
      });
      if (user) {
        const result = await getUser(user as UserType);
        console.log('🚀 ~ results', result);
        if (!result) {
          // insert the user with user role
          const new_user = new Users({
            name: user.name,
            email: user.email,
            role: 'user',
          });
          new_user.save(function (err: any) {
            if (err) console.log(err);
          });
        }
      }
      if (token) {
        token.role = 'user';
      }
      return token;
    },

    async session({ session, user, token }) {
      if (token) {
        session.role = token.role;
      }
      // call the database here and get the user roles
      return session;
    },
  },
});
