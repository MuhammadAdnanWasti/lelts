import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'; // ১. গুগল প্রোভাইডার ইম্পোর্ট
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    // ২. গুগল প্রোভাইডার যোগ করা হয়েছে
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        await connectDB();

        const user = await User.findOne({ email: credentials.email }).select(
          '+password',
        );

        if (!user) {
          throw new Error('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password!,
        );

        if (!isMatch) {
          throw new Error('Invalid credentials');
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    // ৩. গুগল দিয়ে লগইন করলে ডাটাবেজে ইউজার চেক/সেভ করার জন্য signIn কলব্যাক
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        await connectDB();
        try {
          const userExists = await User.findOne({ email: user.email });
          if (!userExists) {
            // নতুন ইউজার হলে ডাটাবেজে সেভ হবে
            await User.create({
              name: user.name,
              email: user.email,
              role: 'user', // ডিফল্ট রোল
            });
          }
          return true;
        } catch (error) {
          console.log('Error checking user:', error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      // গুগল ইউজারের ক্ষেত্রে ডাটাবেজ থেকে রোল খুঁজে বের করা
      if (!token.role && token.email) {
        await connectDB();
        const dbUser = await User.findOne({ email: token.email });
        if (dbUser) {
          token.role = dbUser.role;
          token.id = dbUser._id.toString();
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
