const bcrypt = require('bcrypt')
const route = require('express').Router()
const UserModel = require('../models/user')
const sendMail = require('../services/nodemailerService')

const LogsModel = require('../models/logs');

const hashPassword = async (password) =>  await bcrypt.hash(password, 10)

const comparePassword = async (userBodyPass, userHashPass) => await bcrypt.compare(userBodyPass, userHashPass)

route.post('/new', async (req, res) =>{

    console.log(req.body)

    try {
        const user = {
            userName: req.body.userName,
            email: req.body.email,
            password: await hashPassword(req.body.password)
        }

        console.table(user)

        UserModel.create(user).then(()=>{
            res.status(201).json({
                message: 'Conta criada com sucesso',
                inserted: true
            })
        }).catch(()=>{
            res.status(200).json({
                message: 'erro ao criar usuário',
                inserted: false
            })
        })


    }catch(e){
        res.status(500).json({
            message: 'erro no servidor...',
            inserted: false,
            
        })

        const log = {
            route: "http://localhost:5000/user/new",
            message: e,
        }

        LogsModel.create(log)
    }
})

route.get('/:email/:pass', async (req, res) =>
{
   try
   {
        console.log("request")

        console.log(req.params.email)
        console.log(req.params.pass)

        const user = await UserModel.findOne({email: req.params.email})

       if(user)
       {
           const correctPass = await comparePassword(req.params.pass, user.password)

           if(correctPass)
           {
               res.status(200).json({
                   message: 'usuário encontrado',
                   isFind: true,
                   user
               })

               return
           }
       }

       res.status(200).json({
           message: 'usuário ou senha invalidos !',
           isFind: false,
       })

   }catch(e){

        const log = {
            route: "http://localhost:5000/user/:email/:pass",
            message: e,
        }

        LogsModel.create(log)
   }
})

route.get("/recovery/get-mail/:email", async (req, res) =>{

    try{

        console.log("get by email <<<<")

        const userData = await UserModel.findOne({email: req.params.email});

        if(userData)
        {
            res.json({isFind: true, message: "email encontrado"});
            await sendMail(userData.email, `<Mensagem do Devindicator> Olá ${userData.userName}. recuperção da sua conta`, `clique no link para prosseguir com o processo de recuperação: http://localhost:3000/recovery-pass/${userData._id}`);

        }
        else
            res.json({isFind: false, message: "Nenhum usuário encontrado com esse email ⚠️"});

    }catch(e){

        res.status(500).json({
            message: 'erro no servidor',
            isFind: false
        })
        
        const log = {
            route: "http://localhost:5000/user/recovery/get-mail/:email",
            message: e,
        }

        LogsModel.create(log)
    }

});

route.put("/recovery/updatePass/:_id", async (req, res) => {

    try{

        const { currentPass } = req.body
        console.log(currentPass)
        console.log(req.params._id)

        const newPassword = await hashPassword(currentPass)
        console.log(newPassword)

        const result = await UserModel.updateOne({"_id": req.params._id}, {

            $set:
            {
                "password": newPassword
            }

        })

        console.log(result)

        if(result.matchedCount == 1)
            res.json({isUpdated: true, message: "senha atualizada com sucesso ✅"});
        else
            res.json({isUpdated: false, message: "erro ao atualizar a senha ⚠️"});

    }catch(e){
        res.status(500).json({
            message: 'erro no servidor',
            isUpdated: false
        })

        const log = {
            route: "http://localhost:5000/user/recovery/updatePass/:_id",
            message: e,
        }

        LogsModel.create(log)
    }

});


module.exports = route