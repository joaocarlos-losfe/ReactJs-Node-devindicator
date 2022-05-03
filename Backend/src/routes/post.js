const route = require('express').Router()
const PostModel = require('../models/post')
const UserModel = require('../models/user')
const ResourcesModel = require("../models/resources");
const LogsModel = require('../models/logs');

route.post('/new', async (req, res) => {

    try{
        const user = await UserModel.findOne({userName: req.body.userName})
        if(user)
        {
            
            const post = {
                userName: req.body.userName,
                originalAuthor: req.body.originalAuthor,
                category: req.body.category,
                tags: req.body.tags.split(','),
                descriptionText: req.body.descriptionText,
                title: req.body.title,
                sourceUrl: req.body.sourceUrl
            }

            await PostModel.create(post).then(()=>{
                res.status(201).json({message: "Post adicionado com sucesso ✅", inserted: true})
            }).catch((e)=> {
                res.status(200).json({message: "Já existe um post adicionado com esses dados", inserted: false, e})
            })

        }
        else
            res.status(401).json({message: 'usuário invalido', inserted: false})

    }catch(e){
        res.status(401).json({
            message: 'erro no servidor',
            inserted: false
        })

        const log = {
            route: "http://localhost:5000/post/new",
            message: e,
        }

        LogsModel.create(log)
    }

})

route.get('/get-by-id/:id', async (req, res) => {

    try{
        
        const post = await PostModel.find({_id: req.params.id})

        console.log(post)

        if(post.length > 0)
            res.json({isFind: true, post})
        else
            res.json({isFind: false, message: "post não encontrado"})
        
            
    }catch(e){

        res.json({isFind: false, message: "post não encontrado"})

        const log = {
            route: "http://localhost:5000/post/get-by-id/:id",
            message: e,
        }

        LogsModel.create(log)
    }

})

route.get('/:page', async (req, res) => {

    try {

        const page = parseInt(req.params.page)
        const maximumPosts = 6
        const numberOfDocuments = await PostModel.count({})

        const posts = await PostModel.find({})
            .skip(page > 0 ? (page -1) * maximumPosts : 0)
            .limit(maximumPosts)

        const numberOfPages = Math.ceil(numberOfDocuments / maximumPosts)

        res.status(200).json({posts, numberOfPages})


    }catch(e){
        res.status(500).json({
            message: 'erro no servidor',
            inserted: false
        })

        const log = {
            route: "http://localhost:5000/post/:page",
            message: e,
        }

        LogsModel.create(log)
    }

})

route.get('/search/:category/:query', async (req, res) => {

    try {

        const query = req.params.query
        const data = await ResourcesModel.find({})
        
        const posts = await PostModel.find({
            $or: [
                {category: query},
                {tags: {$in: [query]}},
                {title: query},
                {sourceUrl: query},
                {userName: query}
            ]
        })

        res.status(200).json({posts})


    }catch (e)
    {
        res.status(500).json({
            message: 'erro no servidor',
            inserted: false
        })

        const log = {
            route: "http://localhost:5000/post/search/:category/:query",
            message: e,
        }

        LogsModel.create(log)
    }

})

route.get('/get-user-post/:username', async (req, res) => 
{
    try{
    
        const posts = await PostModel.find({userName:req.params.username})
        res.status(200).json({posts, total_posts: posts.length})

    }catch(e)
    {
        res.status(500).json({
            message: 'erro no servidor',
        })
        
        const log = {
            route: "http://localhost:5000/post/get-user-post/:username",
            message: e,
        }

        LogsModel.create(log)
    }
})

route.delete('/:post_id', async (req, res) =>
{
   
    try{

        const deleted = await PostModel.deleteOne({"_id": req.params.post_id})

        console.log(deleted)

        if(deleted.deletedCount == 1)
            res.json({message: "Post deletado com sucesso" , deleted: true, post_id: req.params.id})
        else
            res.json({message: "Post não encontrado" , deleted: false, post_id: req.params.id})

    }catch(e)
    {
        res.status(501).json({
            message: 'erro no servidor',
        })
        
        const log = {
            route: "http://localhost:5000/post/:post_id",
            message: e,
        }

        LogsModel.create(log)
    }

})

route.put('/edit/:id', async (req, res) =>
{
    
    try{

        const edited = await PostModel.updateOne({"_id": req.params.id}, 
        {
            $set:
            {
                "title": req.body.title,
                "descriptionText": req.body.descriptionText,
                "originalAuthor": req.body.originalAuthor,
                "category": req.body.category,
                "sourceUrl": req.body.sourceUrl
            }
        }); 

        if(edited && edited.matchedCount > 0)
            res.json({isEdited: true, message: "post editado com sucesso ✅ Aguarde. redirecionando ...."})
        else
            res.json({isEdited: false, message: "erro ao editar post ⚠️"});


    }catch(e)
    {
        res.json({isEdited: false, message: "erro no servidor ⚠️"});
     
        const log = {
            route: "http://localhost:5000/post/edit/:id",
            message: e,
        }

        LogsModel.create(log)
    }
})

module.exports = route