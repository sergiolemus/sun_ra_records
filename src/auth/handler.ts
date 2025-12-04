import NextAuth, { type DefaultSession } from "next-auth";
import { config } from "./config";

declare module "next-auth" {
  interface Session {
    user: { id: string } & DefaultSession["user"];
  }
}

export const handler = NextAuth(config);
