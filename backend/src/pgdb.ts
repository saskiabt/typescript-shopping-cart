const { Client } = require("pg");
import { QueryResult } from "@mikro-orm/core";
import dotenv from "dotenv";

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: process.env.DB_PW,
  port: 5432,
  database: "postgres",
});

client.connect();

// client.query(`select * from users`, (err: Error, res: QueryResult) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err);
//   }
//   client.end();
// });
