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
        host: 'ec2-52-45-179-101.compute-1.amazonaws.com',
        user: 'wnabpdrpcyoklj',
        password: '0aa9a16562d0e8ddc1d81edc6fe1c81fbe358c3ae7d139df29e10b38a47a8df8',          
        database: 'd3s3mi5q8k71c4',
        Port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex

