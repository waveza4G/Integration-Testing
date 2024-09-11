import { createPool } from "mysql2";

// Create a pool of connections
export const connection = createPool({
    host: "localhost",
    port: 3300,
    user: "root",
    password: "admin",
    database: "product_db"
});



// Wrap the pool in a promise-based API if needed
export const promisePool = connection.promise();