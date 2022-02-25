const router = require('express').Router();

const PostModel = require('../models/post');

router.post("/add", (req, res) =>
{
    const {username, post_date, category, tags, title, description} = req.body;
});