const router = require('express').Router();

const UserModel = require('../models/user');
const {encriptData, decryptData} = require('../security/bcript');

router.post("/add", async (req, res) =>
{
    let {username, email, pass} = req.body;

    if(!username || !email || !pass)
    {
        res.status(422).json({menssage: "alguns campos estão em branco ou invalidos !"});
        return;
    }
    
    pass = await encriptData(pass);

    const user = { username, email, pass}

    try
    {
        await UserModel.create(user);
        res.status(201).json({menssage: "usuario criado com sucesso"});

    }catch (err)
    {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res)=>
{
    
});

module.exports = router;