import { PrismaClient } from "@prisma-clients/generated/client-dms-by-ivin-dev";

const globalForPrisma = globalThis as unknown as {
  prismaDmsByIvinDev: PrismaClient | undefined;
};

export const dbDmsByIvinDev =
  globalForPrisma.prismaDmsByIvinDev ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prismaDmsByIvinDev = dbDmsByIvinDev;
