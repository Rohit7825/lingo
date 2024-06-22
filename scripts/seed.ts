import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding Database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/ES.svg",
      },
      {
        id: 2,
        title: "Italian",
        imageSrc: "/IT.svg",
      },
      {
        id: 3,
        title: "French",
        imageSrc: "/FR.svg",
      },
      {
        id: 4,
        title: "Croatian",
        imageSrc: "/HR.svg",
      },
    ]);
    console.log("Seeding Finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
