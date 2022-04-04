const route = require('express').Router()
const ResourcesModel = require('../models/resources')

route.get('/categories', async (req, res)=>{

    try {
        const data = await ResourcesModel.find({})
        const {categories} = data[0]
        res.status(200).json({categories})
    }catch (e)
    {
        res.status(401).json({
            message: 'erro no servidor',
            inserted: false
        })

        console.log(e)
    }

})

module.exports = route
