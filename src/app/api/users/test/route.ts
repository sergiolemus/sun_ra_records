import { db } from "@/db";
import { users } from "@/db/schema/users";
import { getSession } from "@/auth";
import { eq } from "drizzle-orm";

export const GET = async () => {
  const session = await getSession();

  if (session) {
    const results = await db
      .select()
      .from(users)
      .where(eq(users.id, session.user.id));

    return Response.json({ results, session });
  }

  return Response.json({ session });
};
