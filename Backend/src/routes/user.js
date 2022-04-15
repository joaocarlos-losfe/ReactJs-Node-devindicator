const bcrypt = require('bcrypt')
const route = require('express').Router()
const UserModel = require('../models/user')

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
            e
        })

        console.log(e)
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
       res.status(500).json({
           message: 'erro no servidor',
           isFind: false
       })

       console.log(e)
   }
})


module.exports = route