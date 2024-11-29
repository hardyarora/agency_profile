import type { Express } from "express";
import { db } from "../db";
import { leads } from "@db/schema";

export function registerRoutes(app: Express) {
  app.post("/api/leads", async (req, res) => {
    try {
      const lead = await db.insert(leads).values(req.body).returning();
      res.json(lead[0]);
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(500).json({ error: "Failed to submit lead" });
    }
  });
}
