const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

const topicController = require('./controllers/topicController')



app.listen(3001, ()=>{
    console.log("Server is servering")
})