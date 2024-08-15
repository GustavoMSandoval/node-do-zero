import { sql } from './db.js'

sql`
  Create Table videos (
    id              Text PRIMARY KEY,
    title           TEXT,
    description     TEXT,
    duration        INTEGER
 );
`.then(() => {
    console.log("tabela criada")
})