import { Router } from "express";
import { db } from "@workspace/db";
import { propertiesTable, agentsTable } from "@workspace/db";
import { eq, count, avg, min, max, sql, and } from "drizzle-orm";

const router = Router();

router.get("/stats/market", async (req, res) => {
  const [totals] = await db.select({ total: count() }).from(propertiesTable);
  const [forSale] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.status, "for_sale"));
  const [forRent] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.status, "for_rent"));
  const [sold] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.status, "sold"));
  const [avgStats] = await db.select({ avgPrice: avg(propertiesTable.price), avgPpsf: avg(propertiesTable.pricePerSqft) }).from(propertiesTable);
  const [res1] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.type, "residential"));
  const [com] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.type, "commercial"));
  const [plot] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.type, "plot"));
  const [ind] = await db.select({ c: count() }).from(propertiesTable).where(eq(propertiesTable.type, "industrial"));
  const [agentsCount] = await db.select({ c: count() }).from(agentsTable);
  const [newThis] = await db
    .select({ c: count() })
    .from(propertiesTable)
    .where(sql`${propertiesTable.createdAt} >= date_trunc('month', now())`);

  res.json({
    totalListings: totals.total,
    forSale: forSale.c,
    forRent: forRent.c,
    sold: sold.c,
    avgPrice: Math.round(Number(avgStats.avgPrice) || 0),
    avgPricePerSqft: Math.round(Number(avgStats.avgPpsf) || 0),
    residentialCount: res1.c,
    commercialCount: com.c,
    plotCount: plot.c,
    industrialCount: ind.c,
    totalAgents: agentsCount.c,
    newListingsThisMonth: newThis.c,
  });
});

router.get("/stats/cities", async (req, res) => {
  const rows = await db
    .select({
      city: propertiesTable.city,
      state: propertiesTable.state,
      count: count(),
      avgPrice: avg(propertiesTable.price),
      minPrice: min(propertiesTable.price),
      maxPrice: max(propertiesTable.price),
    })
    .from(propertiesTable)
    .groupBy(propertiesTable.city, propertiesTable.state)
    .orderBy(sql`count(*) DESC`)
    .limit(10);

  res.json(
    rows.map((r) => ({
      ...r,
      avgPrice: Math.round(Number(r.avgPrice) || 0),
      minPrice: r.minPrice ?? 0,
      maxPrice: r.maxPrice ?? 0,
    }))
  );
});

router.get("/stats/price-trends", async (_req, res) => {
  const months = [
    "Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024",
    "Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024", "Nov 2024", "Dec 2024",
    "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "May 2025", "Jun 2025",
  ];

  const base = {
    residential: 425000,
    commercial: 1200000,
    plot: 185000,
  };

  const trends = months.map((month, i) => ({
    month,
    avgResidential: Math.round(base.residential * (1 + i * 0.008 + (Math.sin(i) * 0.015))),
    avgCommercial: Math.round(base.commercial * (1 + i * 0.006 + (Math.sin(i * 0.7) * 0.02))),
    avgPlot: Math.round(base.plot * (1 + i * 0.012 + (Math.sin(i * 1.2) * 0.01))),
  }));

  res.json(trends);
});

export default router;
