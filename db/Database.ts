import { Database as DbConn } from "https://deno.land/x/denodb/mod.ts";
import { User } from "../controllers/models/index.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";

export class Database {
  client: DbConn;

  /**
   * Initialise database client
   */
  constructor() {
    const configs = env()
    this.client = new DbConn("postgres", {
      database: configs.DB_NAME,
      host: configs.DB_HOST,
      port: parseInt(configs.DB_PORT),
      username: configs.DB_USER,
      password: ''
    });
  }

  /**
   * Initialise models
   */
  initModels() {
    this.client.link([User]);
    return this.client.sync({ drop: true });
  }
}
