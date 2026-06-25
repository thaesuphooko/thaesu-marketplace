import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  price: integer("price").notNull(),
  image: text("image").notNull(),
});
