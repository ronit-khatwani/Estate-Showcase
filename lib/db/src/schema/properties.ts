import { pgTable, serial, text, integer, real, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const agentsTable = pgTable("agents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  photo: text("photo").notNull(),
  title: text("title").notNull(),
  bio: text("bio"),
  rating: real("rating").notNull().default(4.5),
  totalSales: integer("total_sales").notNull().default(0),
  activeListings: integer("active_listings").notNull().default(0),
  specializations: jsonb("specializations").$type<string[]>().notNull().default([]),
  languages: jsonb("languages").$type<string[]>().notNull().default([]),
  yearsExperience: integer("years_experience").notNull().default(1),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertAgentSchema = createInsertSchema(agentsTable).omit({ id: true, createdAt: true });
export type InsertAgent = z.infer<typeof insertAgentSchema>;
export type Agent = typeof agentsTable.$inferSelect;

export const propertiesTable = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").notNull(),
  subtype: text("subtype"),
  status: text("status").notNull().default("for_sale"),
  price: integer("price").notNull(),
  pricePerSqft: integer("price_per_sqft"),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code"),
  lat: real("lat").notNull(),
  lng: real("lng").notNull(),
  area: integer("area").notNull(),
  bedrooms: integer("bedrooms"),
  bathrooms: integer("bathrooms"),
  yearBuilt: integer("year_built"),
  parking: integer("parking"),
  floors: integer("floors"),
  featured: boolean("featured").notNull().default(false),
  images: jsonb("images").$type<string[]>().notNull().default([]),
  amenities: jsonb("amenities").$type<string[]>().notNull().default([]),
  agentId: integer("agent_id").notNull().references(() => agentsTable.id),
  views: integer("views").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertPropertySchema = createInsertSchema(propertiesTable).omit({ id: true, createdAt: true });
export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof propertiesTable.$inferSelect;
