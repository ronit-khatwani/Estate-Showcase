import { Router } from "express";
import { db } from "@workspace/db";
import { propertiesTable } from "@workspace/db";
import { ilike, sql, count } from "drizzle-orm";
import { GetSearchSuggestionsQueryParams } from "@workspace/api-zod";

const router = Router();

router.get("/search/suggestions", async (req, res) => {
  const parsed = GetSearchSuggestionsQueryParams.safeParse(req.query);
  if (!parsed.success || !parsed.data.q) {
    res.status(400).json({ error: "Missing query" });
    return;
  }
  const q = parsed.data.q;

  const cities = await db
    .select({
      city: propertiesTable.city,
      state: propertiesTable.state,
      count: count(),
    })
    .from(propertiesTable)
    .where(ilike(propertiesTable.city, `%${q}%`))
    .groupBy(propertiesTable.city, propertiesTable.state)
    .limit(5);

  const props = await db
    .select({
      id: propertiesTable.id,
      title: propertiesTable.title,
      city: propertiesTable.city,
    })
    .from(propertiesTable)
    .where(ilike(propertiesTable.title, `%${q}%`))
    .limit(3);

  const suggestions = [
    ...cities.map((c) => ({
      id: `city-${c.city}`,
      label: `${c.city}, ${c.state}`,
      type: "city" as const,
      count: c.count,
    })),
    ...props.map((p) => ({
      id: `property-${p.id}`,
      label: p.title,
      type: "property" as const,
      count: null,
    })),
  ];

  res.json(suggestions);
});

export default router;
