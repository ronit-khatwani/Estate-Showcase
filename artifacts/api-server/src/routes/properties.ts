import { Router } from "express";
import { db } from "@workspace/db";
import { propertiesTable, agentsTable } from "@workspace/db";
import { eq, and, gte, lte, like, desc, asc, count, avg, min, max, sql, ilike } from "drizzle-orm";
import {
  ListPropertiesQueryParams,
  GetPropertyParams,
  CreatePropertyBody,
  UpdatePropertyParams,
  UpdatePropertyBody,
  DeletePropertyParams,
  GetPropertiesForMapQueryParams,
  GetSearchSuggestionsQueryParams,
} from "@workspace/api-zod";

const router = Router();

router.get("/properties", async (req, res) => {
  const parsed = ListPropertiesQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid query params" });
    return;
  }
  const { type, city, minPrice, maxPrice, minArea, maxArea, bedrooms, status, sortBy, page = 1, limit = 12 } = parsed.data;

  const conditions = [];
  if (type && type !== "all") conditions.push(eq(propertiesTable.type, type));
  if (city) conditions.push(ilike(propertiesTable.city, `%${city}%`));
  if (minPrice) conditions.push(gte(propertiesTable.price, minPrice));
  if (maxPrice) conditions.push(lte(propertiesTable.price, maxPrice));
  if (minArea) conditions.push(gte(propertiesTable.area, minArea));
  if (maxArea) conditions.push(lte(propertiesTable.area, maxArea));
  if (bedrooms) conditions.push(eq(propertiesTable.bedrooms, bedrooms));
  if (status && status !== "all") conditions.push(eq(propertiesTable.status, status));

  const where = conditions.length > 0 ? and(...conditions) : undefined;

  let orderBy;
  switch (sortBy) {
    case "price_asc": orderBy = asc(propertiesTable.price); break;
    case "price_desc": orderBy = desc(propertiesTable.price); break;
    case "area": orderBy = desc(propertiesTable.area); break;
    default: orderBy = desc(propertiesTable.createdAt);
  }

  const offset = (page - 1) * limit;

  const [rows, totalResult] = await Promise.all([
    db.select().from(propertiesTable).where(where).orderBy(orderBy).limit(limit).offset(offset),
    db.select({ count: count() }).from(propertiesTable).where(where),
  ]);

  const total = totalResult[0]?.count ?? 0;
  res.json({ data: rows, total, page, limit, totalPages: Math.ceil(total / limit) });
});

router.get("/properties/featured", async (req, res) => {
  const rows = await db
    .select()
    .from(propertiesTable)
    .where(eq(propertiesTable.featured, true))
    .orderBy(desc(propertiesTable.createdAt))
    .limit(8);
  res.json(rows);
});

router.get("/properties/recent", async (req, res) => {
  const rows = await db
    .select()
    .from(propertiesTable)
    .orderBy(desc(propertiesTable.createdAt))
    .limit(10);
  res.json(rows);
});

router.get("/properties/map", async (req, res) => {
  const parsed = GetPropertiesForMapQueryParams.safeParse(req.query);
  const conditions = [];
  if (parsed.success) {
    if (parsed.data.type && parsed.data.type !== "all") conditions.push(eq(propertiesTable.type, parsed.data.type));
    if (parsed.data.status && parsed.data.status !== "all") conditions.push(eq(propertiesTable.status, parsed.data.status));
  }
  const where = conditions.length > 0 ? and(...conditions) : undefined;
  const rows = await db
    .select({
      id: propertiesTable.id,
      lat: propertiesTable.lat,
      lng: propertiesTable.lng,
      price: propertiesTable.price,
      type: propertiesTable.type,
      title: propertiesTable.title,
      status: propertiesTable.status,
      image: sql<string | null>`(${propertiesTable.images}->0)`,
    })
    .from(propertiesTable)
    .where(where)
    .limit(200);
  res.json(rows);
});

router.get("/properties/:id", async (req, res) => {
  const parsed = GetPropertyParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }
  const [row] = await db.select().from(propertiesTable).where(eq(propertiesTable.id, parsed.data.id));
  if (!row) {
    res.status(404).json({ error: "Property not found" });
    return;
  }
  await db.update(propertiesTable).set({ views: (row.views ?? 0) + 1 }).where(eq(propertiesTable.id, row.id));
  res.json({ ...row, views: (row.views ?? 0) + 1 });
});

router.post("/properties", async (req, res) => {
  const parsed = CreatePropertyBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid body", details: parsed.error });
    return;
  }
  const [row] = await db.insert(propertiesTable).values(parsed.data).returning();
  res.status(201).json(row);
});

router.patch("/properties/:id", async (req, res) => {
  const paramsParsed = UpdatePropertyParams.safeParse(req.params);
  const bodyParsed = UpdatePropertyBody.safeParse(req.body);
  if (!paramsParsed.success || !bodyParsed.success) {
    res.status(400).json({ error: "Invalid request" });
    return;
  }
  const [row] = await db
    .update(propertiesTable)
    .set(bodyParsed.data)
    .where(eq(propertiesTable.id, paramsParsed.data.id))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Property not found" });
    return;
  }
  res.json(row);
});

router.delete("/properties/:id", async (req, res) => {
  const parsed = DeletePropertyParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }
  await db.delete(propertiesTable).where(eq(propertiesTable.id, parsed.data.id));
  res.status(204).send();
});

export default router;
