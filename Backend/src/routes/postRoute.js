const router = require('express').Router();
const PostModel = require('../models/post');

function addZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}

function getFormatedDatetime()
{
    let data = new Date();
    let formatedDate = addZero((data.getDate() )) + "/" + addZero((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    let formatedTime = addZero(data.getHours()) + ":" + addZero(data.getMinutes());
    
    return formatedDate + " " + formatedTime;
}

router.get("/:page", async (req, res) => 
{
    try
    {   
        const page = parseInt(req.params.page);
        const maxPosts = 8;
        const posts = await PostModel.find({}).skip(page > 0 ? ((page -1) * maxPosts) : 0).limit(maxPosts);
        const count = await PostModel.count({})
        const totalpages = Math.ceil(count / maxPosts)
        res.status(200).json({posts, totalpages});

    }catch(err)
    {
        console.log(err);
        res.status(500).json(err);
    }
}); 

router.post("/add", async (req, res) =>
{
    try
    {
        let {username, category, tags, title, description, source_url} = req.body;
        
        if(!username || !category || !tags || !title || !description || !source_url)
        {
            res.status(401).json({menssage: "alguns dados são invalidos", is_inserted: false});
            return;
        }

        tags = tags.split(';');
        const post_date = getFormatedDatetime()
        const post = { username, post_date, category, tags, title, description, source_url}

        await PostModel.create(post);
        
        res.status(201).json({menssage: "post inserido com sucesso", is_inserted: true});
       
    }catch(err)
    {
        console.log(err);
        res.status(500).json({menssage: err, is_inserted: false});
    }
    
});


router.get("/search/:category/:lookingfor", async (req, res) =>
{
    try
    {   
        console.log("searching...");

        if(req.params.category == "all")
        {
            const posts = await PostModel.find(
            {
                $or:
                [
                    {tags: {$in:[req.params.lookingfor]}},
                    {category: req.params.category},
                    {title: req.params.lookingfor}
                ]
            }).limit(8)
        
            res.status(200).json({posts});
        }
        else
        {
            const posts = await PostModel.find(
            {
                $and:
                [
                    {tags: {$in:[req.params.lookingfor]}},
                    {category: req.params.category},
                ]
            }).limit(8)
        
            res.status(200).json({posts});
        }
        
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;