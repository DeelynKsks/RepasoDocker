const mongoose = require('mongoose')
const mariadb = require('../../database')

const endpoints = {}

endpoints.mongodb = async (req, res) => {

    await mongoose.connect(process.env.MONGODB_URI)
        .then(
            res.json({
                msg: "La conexión a la base de datos de mongo ha sido exitosa"
            })
        )
        .catch(err => res.status(400).json({
            msg: "Ha ocurrido un error con la conexión",
            error: err
        }))
}

endpoints.mariadb = async (req, res) => {
    let dbConnection;
    try {
        dbConnection = await mariadb.getConnection();
        
        return res.json({
            msg: "La conexión a la base de datos de MariaDB está funcionando"
        })
    } catch (err) {
        return res.json({
            msg: 'No se ha podido conectar a la base de datos de MariaDB',
            error: err
        })
    } finally {
        if (dbConnection) dbConnection.end();
    }
}

module.exports = endpoints