const express = require('express');
const mongoose = require('mongoose');

const app = express();

const UserRouter = require('./src/routes/user');
const PostRouter = require('./src/routes/post');

const MONGO_DB_COMPASS_URL = "mongodb+srv://joaocarlos:00000000@devindicatorapi.lzzak.mongodb.net/devindicator_database";
const BASE_URL_DATABASE_CONECTION = "mongodb+srv://joaocarlos:00000000@devindicatorapi.lzzak.mongodb.net/devindicator_database?retryWrites=true&w=majority"; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/users", UserRouter);


app.get("/", (req, res)=>
{
    res.send({menssage: "devindicator server !!!"})
});

// conectando ao banco de dados
mongoose.connect(
    BASE_URL_DATABASE_CONECTION
).then(()=>
{
    console.log("successfully connected to the database !");
})
.catch((err)=>
{
    console.log(err);
});

//iniciar execução do servidor
app.listen(3000, ()=>{console.log("server is running on port 3000 ...")});


