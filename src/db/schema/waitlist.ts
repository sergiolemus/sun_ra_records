import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const waitlist = sqliteTable("waitlist", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text("email").unique().notNull(),
  source: text("source"),
  reason: text("reason"),
  status: text("status").notNull().default("pending"),
  createdAt: integer("createdAt")
    .notNull()
    .$defaultFn(() => Math.floor(Date.now() / 1000)),
  updatedAt: integer("updatedAt")
    .notNull()
    .$defaultFn(() => Math.floor(Date.now() / 1000)),
});

export type InsertWaitlist = typeof waitlist.$inferInsert;
export type SelectWaitlist = typeof waitlist.$inferSelect;
