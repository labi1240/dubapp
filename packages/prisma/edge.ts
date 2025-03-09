// Change edge.ts to work with standard MySQL instead of PlanetScale
import { PrismaClient } from "@prisma/client";

export const prismaEdge = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});