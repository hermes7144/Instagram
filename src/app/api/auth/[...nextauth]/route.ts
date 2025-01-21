import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  
  pages: {
    signIn: '/auth/signin',
    },
  callbacks: {
    async signIn({user: {id, name, image, email}}) {
      if (!email) {
        return false;
      }
      const res = await addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0],
      });
      
      return true;
    }
  }

};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };