import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });
      session.user.id = sessionUser.id;
      return session;
    },
    async signIn({ profile }) {
      try {
        const userExsists = await prisma.user.findUnique({
          where: { email: profile.email },
        });
        if (!userExsists) {
          const newUser = {
            username: profile.name,
            email: profile.email,
            avatar: profile.picture,
          };
          await prisma.user.create({ data: newUser });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
