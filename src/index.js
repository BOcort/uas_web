require('dotenv').config();
const express = require("express");
const port = process.env.server_port;
const cors = require('cors');
const app = express();
const {sequelize} = require('./models')

const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter")
const pinjamRouter = require("./routes/pinjamRouter")


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

sequelize.authenticate().then(function (error){
    console.log('database connetion has susccesfuly');
}).catch(function (error) {
    console.log('unable to connect to database' + error);
})
app.use("/api/pinjam", pinjamRouter )
app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);

app.get("/", (req,res) => {
    res.send({describe: "Project UAS Pemrograman Web", Author: "Ilham Tatayo Lie", NIM: 202265056})
})

app.listen(port, () => {
    console.log("server is running on http://127.0.0.1:" + port)
})