import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";


export const products = pgTable("products", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const users = pgTable("users", {
   id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  telegramId: text("telegram_id").unique(),
  username: text("username"),
});
