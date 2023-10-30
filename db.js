const Pool = require('pg').Pool;
const pool = new Pool({
   user: "postgres",
    host: "172.33.224.34",
    database: "doc_shield",
    password: "admin123",
    port: 5432,
});

module.exports = pool;
// user: "postgres",
//     host: "172.33.224.34",
//     database: "doc_shield",
//     password: "admin123",
//     port: 5432,