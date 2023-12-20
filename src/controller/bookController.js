const { book } = require("../models")

const inserbook = async(req,res) => {
    try {
        const {title,stock} = req.body
        if(!title || !stock) {
            return res.status(400).send({
                message: 'some field  must be filled cannot empty'
            })
        }
        const input = await book.create({
            title: title,
            stock:stock
        })
        return res.status(201).send({
            message: "New book " + title,
            data: input
        })
    } catch (error) {
        return res.status(400).send({
            data: error
        })
    }
}

const dataBook = async (req, res) => {
    try {
        const getbook = await book.findAll();
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
        return res.status(400).send({
            message: error
        })
    }
}
const databookbyid = async (req, res) => {
    try {
        const bookid = req.params.id;  
        const getbook = await book.findOne({
            where: { id: bookid }
        });
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
        return res.status(400).send({
            message: error
        })
    }
}

module.exports = {dataBook,databookbyid, inserbook}