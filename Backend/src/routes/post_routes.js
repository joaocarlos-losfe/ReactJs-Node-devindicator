const router = require('express').Router();
const PostModel = require('../models/post');
const { getCurrentTime } = require('../utils/formated_datetime');

router.post("/add", async (req, res) =>
{
    try
    {
        if(req.body.username && req.body.category && req.body.tags && req.body.title && req.body.description)
        {
            //verificar antes se ja existe um post com mesmo link ou titulo ou texto iguais. 
            //Deve-se rejeitar a operação
            
            let {username, category, tags, title, description} = req.body;

            tags = tags.split(';');

            const post_date = getCurrentTime();
            const post = { username, post_date, category, tags, title, description } //validar antes

            await PostModel.create(post);
            res.status(201).json({menssage: "post inserido com sucesso"});
        }
        else
            res.status(422).json({menssage: "alguns campos estão faltando ou invalidos !"});

    }catch(e)
    {
        console.log(e);
        res.status(500).json(err);
    }
    
});

module.exports = router;