const route = require('express').Router()
const ContactModel = require('../models/contact')

route.post('/new', async (req, res) =>{
    try{

        const user = await ContactModel.findOne({email: req.body.email})
        const date = new Date(Date.now()).toLocaleString('pt-BR')

        const message = {
            contactDate: date,
            wasAnswered : false,
            message: req.body.message,
            response: ""
        }

        const addMessage = async ()=> {
            await ContactModel.updateOne(
                {email: req.body.email},
                {$push: { messages: message} }
            )
        }

        if(user)
            await addMessage()
        else {

            const newUser = {
                fullName: req.body.fullName,
                email: req.body.email,
            }
            await ContactModel.create(newUser)
            await addMessage()
        }

        res.status(201).json({
            message: 'mensagem enviada com sucesso',
            inserted: true
        })

    }catch(e){
        res.status(500).json({
            message: 'erro no servidor',
            inserted: false
        })
        console.log(e)
    }
})

module.exports = route