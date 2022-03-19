const router = require('express').Router();

router.get("/categories", (req, res)=>
{
    try
    {
        console.log('request categories...')

        res.status(200).json({categories: ["todos", "video", "artigo", "plataforma", "projeto", "livro", "noticia"]});

    }catch(err)
    {
        console.log(err);
        res.status(500).json(err);
        console.log('request error...');
    }

});

module.exports = router;