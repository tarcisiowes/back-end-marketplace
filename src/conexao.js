// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'market_cubos',
//     password: '123456',
//     port: 5432
// });

// const query = (text, param) => {
//     return pool.query(text, param);
// }

// module.exports = {
//     query
// }

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '123456',          
        database: 'market_cubos'
    }
})

module.exports = knex