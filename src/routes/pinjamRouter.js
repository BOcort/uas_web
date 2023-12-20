const express = require("express")
const {tambahPinjam,dataPinjam,dataPinjambyIduser} = require('../controller/pinjamController')

const router = express.Router()
router.post('/tambah', tambahPinjam)
router.get('/', dataPinjam)
router.get('/user/:id',dataPinjambyIduser)

module.exports = router;