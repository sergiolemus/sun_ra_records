import { getServerSession, Session } from "next-auth";
import { config } from "./config";

export type GetSession = () => Promise<Session | null>;

export const getSession: GetSession = async () => getServerSession(config);
