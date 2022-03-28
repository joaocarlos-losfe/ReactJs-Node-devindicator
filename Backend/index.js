require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const UserRoute = require('./src/routes/userRoute');
const PostRoute = require('./src/routes/postRoute');
const ContactRoute = require('./src/routes/contactRoute');
const ResoucesRoute = require('./src/routes/resourcesRoute');

app.use(function(req, res, next) 
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/users", UserRoute);
app.use("/post", PostRoute);
app.use("/resouces", ResoucesRoute);
app.use("/contact", ContactRoute);

app.get("/", (req, res)=>
{
    res.send({menssage: "devindicator server !!!"})
});

// conectando ao banco de dados
mongoose.connect(
    process.env.BASE_URL_DATABASE_CONECTION
).then(()=>
{
    console.log("successfully connected to the database !");
})
.catch((err)=>
{
    console.log(err);
});

//iniciar execução do servidor
app.listen(5000, ()=>{console.log("server is running on port 5000 ...")});


