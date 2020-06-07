import { Migration } from "https://deno.land/x/nessie/mod.ts";

/** Runs on migrate */
export const up: Migration = ({ queryBuilder }) => {
  return queryBuilder.create("users", (table: any) => {
    table.increments("id").primary(); // auto incrementing primary key
    table.string("username", 32); // varchar of max length 32
    table.string("firstName"); // varchar of max length 255
    table.string("lastName"); // varchar of max length 255
    table.timestamps(null, true); // createdAt and updatedAt datetimes
  })

  // return new Schema()
  // return Dex
};

/** Runs on rollback */
export const down: Migration = ({ queryBuilder }) => {
  return queryBuilder.drop("users");
};
