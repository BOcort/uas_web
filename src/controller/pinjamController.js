const {pinjam } = require('../models')

const tambahPinjam = async(req,res) => {
    try {
        const {iduser,idbook } = req.body
        if(!iduser || !idbook) {
            return res.status(400).send({
                message: 'some field  must be filled cannot empty'
            })
        }
        const double = await pinjam.findOne({
            where: {
                id_user: iduser,
                id_book: idbook
            }
        })
        if (double) {
            return res.status(409).send({
                message: "already exist",
                data: double
            })
        }
        const input = await pinjam.create({
            id_user:iduser,
            id_book:idbook
        })
        return res.status(201).send({
            message: "add pinjam",
            data: input
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "Pinjam was erro",
            data: error
        })
    }
}
const dataPinjam = async (req, res) => {
    try {
        const getbook = await pinjam.findAll();
        if (!getbook) {
            return res.status(404).send({
                message: "404 Doesnt Customer",
                data: getbook
            })
        }
        return res.status(200).send({
            message: "Get data",
            data: getbook
        })

    }
    catch (error) {
        return res.status(400).send({
            message: error
        })
    }
}

const dataPinjambyIduser = async (req, res) => {
    try {
        const iduser = req.params.id
        const getbook = await pinjam.findAll({
            where: {
                id_user: iduser
            }
        })
        if (!getbook) {
            return res.status(404).send({
                message: "404 Doesnt have book",
                data: getbook
            })
        }
        return res.status(200).send({
            message: "Get data",
            data: getbook
        })

    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: error
        })
    }
}

module.exports = {tambahPinjam, dataPinjam,dataPinjambyIduser}