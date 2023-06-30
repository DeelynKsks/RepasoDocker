const express = require('express')
const router = express.Router()

const {mongodb, mariadb} = require('../Controllers/endpoints.controllers')

router.get('/check-mariadb-connection', mongodb)
router.get('/check-mongodb-connection', mariadb)

module.exports = router