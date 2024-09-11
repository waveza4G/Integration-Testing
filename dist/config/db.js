"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisePool = exports.connection = void 0;
const mysql2_1 = require("mysql2");
// Create a pool of connections
exports.connection = (0, mysql2_1.createPool)({
    host: "localhost",
    port: 3300,
    user: "root",
    password: "admin",
    database: "product_db"
});
// Wrap the pool in a promise-based API if needed
exports.promisePool = exports.connection.promise();
