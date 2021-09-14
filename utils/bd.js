const knex = require('knex')({
client: 'mysql',
connection: {
    host: 'localhost' || process.env.DB_HOST,
    user: 'root' || process.env.DB_USER,
    password: '' || process.env.DB_PASS,
    database: 'pwa-2021-2cm' || process.env.DB_NAME,
    pool: {min: 1, max: 10}
}
});

module.exports = knex;