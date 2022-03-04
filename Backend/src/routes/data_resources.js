const router = require('express').Router();

router.get("/categories", (req, res)=>
{
    try
    {
        const categories = ["Video", "Artigo", "Plataforma", "Projeto", "Livro"];
        res.status(200).json({data: categories});

    }catch(err)
    {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = router;