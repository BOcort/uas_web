const express = require("express")
const {dataBook, inserbook,databookbyid} = require("../controller/bookController");

const router = express.Router()
router.get('/',dataBook)
router.get('/:id',databookbyid)
router.post('/insertbook',inserbook)

module.exports = router