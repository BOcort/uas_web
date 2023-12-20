const knex = require('../modelsKnex/knex')
const {user} = require('../models') 
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const create = async(req,res) => {
    try {
        const {username,email,password,role} = req.body
        if(!username || !email || !password) {
            return res.status(400).send({
                message: 'some field  must be filled cannot empty'
            })
        }
        const hashpassword = bycrypt.hashSync(password, 8)
        const input = await user.create({
            username: username,
            email: email,
            password:hashpassword,
            role: role
        })
        return res.status(201).send({
            message: "user created",
            data: input
        })
    } catch (error) {
        return res.status(400).send({
            message: "user error",
            data: error
        })
    }
}
const login = async(req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password) {
            return res.status(400).send({
                message: 'some field  must be filled cannot empty'
            })
        }
        const getuser = await user.findOne({
            where: {email:email}
        })
        if (!getuser) {
            return res.status(404).send({
                message: "data not found",
                data: getuser
            })
        }
        // console.log(getuser);
        const validated = bycrypt.compareSync(password,getuser.dataValues.password)
        if (!validated) {
            return res.status(401).send({
                message: "Not Validated",
                validPassword: validated
            })
        }
        const token = jwt.sign({ userId: getuser.id }, 'key', { expiresIn: '1h' });
        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            maxAge: 60 * 60, 
            sameSite: 'strict',
            path: '/',
        }));
        return res.status(200).send({
            message: "Login Succesfuly",
            data: getuser
        })
    } catch (error) {
        return res.status(400).send({
            message: "Error",
            data: error
        })
    }
}
module.exports = {create, login}