var router = require('express').Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())

router.use(require('./products'))

module.exports=router;