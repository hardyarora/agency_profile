import type { Express } from "express";
import { db } from "../db";
import { leads } from "@db/schema";

function basicAuth(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "No authorization header" });
    return;
  }

  const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
  const [, password] = auth.split(':');

  if (password !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Invalid password" });
    return;
  }

  next();
}

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

  app.get("/api/leads", basicAuth, async (req, res) => {
    try {
      const allLeads = await db.select().from(leads).orderBy(leads.createdAt);
      res.json(allLeads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });
}
