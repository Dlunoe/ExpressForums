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
});

router.post('/', async (req,res)=>{
    try{
        const newTopic = await Topic.create(req.body)
        res.json({
            status:{
                code:201,
                message:"topic created"
            },
            data: newTopic
        })
    } catch(err){
        res.send(err)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const foundTopic = await Topic.findById(req.params.id)
        res.json({
            status:{
                code: 200,
                message: "found the topic"
            },
            data:foundTopic
        })
    } catch(err){
        res.send(err)
    }
})

module.exports = router