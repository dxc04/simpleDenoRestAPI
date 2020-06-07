import { ClientPostgreSQL } from "https://deno.land/x/nessie/mod.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";


const clientOptions = {
    migrationFolder: "./db/migrations",
    seedFolder: "./db/seeds",
  };
  
const configs = env()
const clientPg = new ClientPostgreSQL(clientOptions, {
  database: configs.DB_NAME,
  hostname: configs.DB_HOST,
  port: parseInt(configs.DB_PORT),
  user: configs.DB_USER
});

const config = {
    client: clientPg,
    exposeQueryBuilder: true,
  };
  
  export default config;