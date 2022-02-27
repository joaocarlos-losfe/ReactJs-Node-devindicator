const router = require('express').Router();

const PostModel = require('../models/post');

router.post("/add", (req, res) =>
{
    try
    {
        if(req.body.username && req.body.post_date && req.body.category 
            && req.body.tags && req.body.title && req.body.description)
        {
            const {username, post_date, category, tags, title, description} = req.body;
            

        }
        else
            res.status(422).json({menssage: "alguns campos estão em branco ou invalidos !"});

    }catch(e)
    {

    }
    
});