const bcrypt = require('bcrypt')
const route = require('express').Router()
const UserModel = require('../models/user')
const {use} = require("bcrypt/promises");

const hashPassword = async (password) => await bcrypt.hash(password, 10)
const comparePassword = async (userBodyPass, userHashPass) => await bcrypt.compare(userBodyPass, userHashPass)

route.post('/new', async (req, res) =>{

    try {
        const user = {
            userName: req.body.userName,
            email: req.body.email,
            password: await hashPassword(req.body.pass)
        }

        console.table(user)

        UserModel.create(user).then(()=>{
            res.status(201).json({
                message: 'Conta criada com sucesso',
                inserted: true
            })
        }).catch(()=>{
            res.status(500).json({
                message: 'erro ao criar usuário',
                inserted: false
            })
        })


    }catch(e){
        res.status(500).json({
            message: 'erro no servidor...',
            inserted: false
        })
    }
})

route.get('/:username', async (req, res) =>
{
   try
   {
       const user = await UserModel.findOne({userName: req.params.username})

       if(user)
       {
           const correctPass = await comparePassword(req.body.password, user.password)

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

       res.status(401).json({
           message: 'usuário ou senha invalido',
           isFind: false,
       })

   }catch(e){
       res.status(500).json({
           message: 'erro no servidor',
           isFind: false
       })

       console.log(e)
   }
})

module.exports = route