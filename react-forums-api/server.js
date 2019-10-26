const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

const topicController = require('./controllers/topicController')

app.use('/topic', topicController)

app.listen(3001, ()=>{
    console.log("Server is servering")
})