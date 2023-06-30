const mariadb = require('mariadb')

const db = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    user: 'root',
    password: process.env.MARIADB_PASSWORD,
    
})

module.exports = db