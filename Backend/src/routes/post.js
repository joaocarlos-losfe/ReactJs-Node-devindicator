const route = require('express').Router()
const PostModel = require('../models/post')
const UserModel = require('../models/user')
const ResourceModel = require('../models/resources')
const ResourcesModel = require("../models/resources");

route.post('/new', async (req, res) => {
    try{
        const user = await UserModel.findOne({userName: req.body.userName})
        if(user)
        {
            console.table(req.body)

            const post = {
                userName: req.body.userName,
                originalAuthor: req.body.originalAuthor,
                category: req.body.category,
                tags: req.body.tags.split(';'),
                descriptionText: req.body.descriptionText,
                title: req.body.title,
                sourceUrl: req.body.sourceUrl
            }

            await PostModel.create(post).then(()=>{
                res.status(201).json({message: "Post adicionado com sucesso ✔", inserted: true})
            }).catch((e)=> {
                res.status(200).json({message: "Já existe um post adicionado com esses dados por outro usuário!", inserted: false, e})
            })

        }
        else
            res.status(401).json({message: 'usuário invalido', inserted: false})

    }catch(e){
        res.status(401).json({
            message: 'erro no servidor',
            inserted: false
        })

        console.log(e)
    }

})

route.get('/:page', async (req, res) => {

    try {
        const page = parseInt(req.params.page)
        const maximumPosts = 8
        const numberOfDocuments = await PostModel.count({})

        const posts = await PostModel.find({})
            .skip(page > 0 ? (page -1) * maximumPosts : 0)
            .limit(maximumPosts)

        const numberOfPages = Math.ceil(numberOfDocuments / maximumPosts)

        res.status(200).json({posts, numberOfPages})

    }catch(e){
        res.status(401).json({
            message: 'erro no servidor',
            inserted: false
        })
        console.log(e)
    }

})

route.get('/search/:category/:query', async (req, res) => {

    try {

        const query = req.params.query
        const category = req.params.category

        const data = await ResourcesModel.find({})
        const {categories} = data[0]

        if(category == "nenhum")
        {
            const posts = await PostModel.find({
                $or: [
                    {tags: {$in: [query]}},
                    {category: query},
                    {title: query},
                    {userName: query}
                ]
            })
            res.status(200).json({posts})
        }
        else if (category != "nenhum")
        {
            const posts = await PostModel.find({
                $and: [
                    {category: category},
                    {tags: {$in: [query]}},
                ]
            })
            res.status(200).json({posts})
        }

    }catch (e)
    {
        res.status(401).json({
            message: 'erro no servidor',
            inserted: false
        })

        console.log(e)
    }

})

route.get('/get-user-post/:username', async (req, res) => 
{
    try{
    
        const posts = await PostModel.find({userName:req.params.username})
        res.status(200).json({posts, total_posts: posts.length})

    }catch(e)
    {
        res.status(501).json({
            message: 'erro no servidor',
        })
        console.log(e)
    }
})

module.exports = route