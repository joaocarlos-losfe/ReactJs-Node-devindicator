const router = require('express').Router();
const UserModel = require('../models/user');
const {encriptData, decryptData} = require('../security/criptografy');

router.post("/add", async (req, res) =>
{
    try
    {
        if(req.body.username && req.body.email && req.body.pass)
        {
            const user_name = await UserModel.findOne({username: req.body.username});
            const user_email = await UserModel.findOne({email: req.body.email});

            if(user_name || user_email) 
                res.status(401).json({menssage: "ja existe um cadastro com esse email ou usuario"});
            else
            {
                const {username, email} = req.body;

                let pass = await encriptData(req.body.pass);

                const user = {username, email, pass}

                await UserModel.create(user);
                res.status(201).json({menssage: "usuario criado com sucesso"});
            }   
            
        }
        else
            res.status(422).json({menssage: "alguns campos estão faltando ou invalidos !"});

    }catch (err)
    {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login/:email/:pass', async (req, res)=>
{
    try
    {
        const user = await UserModel.findOne({email: req.params.email});

        if(user)
        {
            if( await decryptData(user.pass, req.params.pass))
            {
                res.status(200).json({menssage: 'usuario logado', data: user.username});
                return;
            }
        }

        res.status(422).json({menssage: 'email ou senha invalidos', data: undefined});

    }catch(e){
        res.status(500).json({menssage: 'erro no servidor..'});
    }
});

module.exports = router;