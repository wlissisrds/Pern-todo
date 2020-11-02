// conectando database ao servidor
// POOL -> especifica onde quero inserir e buscar dados
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
