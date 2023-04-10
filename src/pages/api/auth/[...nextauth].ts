import { compare } from 'bcryptjs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectMongo from '../../../../database/config';
import Users from '../../../../model/Schema';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '../../../dbOperations/dbOperations';
import { UserType } from '../../../types/dboperationTypes';
import { Role } from '../../../types/authTypes';

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        connectMongo().catch((_error) => {
          error: 'Connection Failed...!';
        });

        // Find user with the email
        const user = await Users.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!user) {
          throw new Error('Email is not registered');
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials!.password,
          user.hashedPassword
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error('Password is incorrect');
        }

        return user;
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
        if (!result) {
          // insert the user with user role
          const new_user = new Users({
            name: user.name,
            email: user.email,
            role: Role.user,
          });
          new_user.save(function (err: any) {
            if (err) console.log(err);
          });
        } else {
          if (token) {
            token.role = result.role;
          }
        }
      }

      return token;
    },

    async session({ session, user, token }) {
      if (token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
