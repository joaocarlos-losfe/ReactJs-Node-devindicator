const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config()

const app = express()
const ContactRoute = require('./routes/contact')
const UserRoute = require('./routes/user')
const PostRoute = require('./routes/post')
const ResourcesRoute = require('./routes/resources')

app.use(cors({origin: '*'}));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contact', ContactRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
app.use('/resources', ResourcesRoute)

const port = 5000

mongoose.connect(process.env.URL_DATABASE)
    .then(()=>console.log('connected to database...'))
    .catch((err) => console.log(err))

app.listen(port, ()=>{console.log(`server is running on port ${port}`)})