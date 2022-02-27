const express = require('express');
const mongoose = require('mongoose');

const SECRET = require('./src/security/secrets')

const app = express();

const UserRouter = require('./src/routes/user_routes');
const PostRouter = require('./src/routes/post_routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/users", UserRouter);


app.get("/", (req, res)=>
{
    res.send({menssage: "devindicator server !!!"})
});

// conectando ao banco de dados
mongoose.connect(
    SECRET.BASE_URL_DATABASE_CONECTION
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


