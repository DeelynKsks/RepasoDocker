const express = require('express')

const app = express()

const port = process.env.PORTDOCKER

app.use(require('./src/Routes/endpoints.routes'))

app.listen(3500, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
    console.log(`Verificación de conexión a la base de datos de MongoDB: http://localhost:${port}/check-mongodb-connection`)
    console.log(`Verificación de conexión a la base de datos de MariaDB: http://localhost:${port}/check-mariadb-connection`)
})