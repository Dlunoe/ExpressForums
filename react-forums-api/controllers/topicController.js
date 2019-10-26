const express = require('express');

const router = express.Router();

const Topic = require('../models/topic');

router.get('/', async (req, res, next)=>{
    try{
        const allTopics = await Topic.find()
        res.json({
            status:{
                code: 200,
                message: "success"
            },
            data: allTopics
        })
    } catch(err){
        res.send(err)
    }
})

module.exports = router