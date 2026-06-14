import { Router } from "express";
import { db } from "@workspace/db";
import { agentsTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import { GetAgentParams } from "@workspace/api-zod";

const router = Router();

router.get("/agents", async (req, res) => {
  const rows = await db.select().from(agentsTable).orderBy(desc(agentsTable.totalSales));
  res.json(rows);
});

router.get("/agents/:id", async (req, res) => {
  const parsed = GetAgentParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }
  const [row] = await db.select().from(agentsTable).where(eq(agentsTable.id, parsed.data.id));
  if (!row) {
    res.status(404).json({ error: "Agent not found" });
    return;
  }
  res.json(row);
});

export default router;
