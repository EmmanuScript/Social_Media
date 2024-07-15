import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  username: "root",
  password: "olamizzy66",
  database: "social_media",
});
