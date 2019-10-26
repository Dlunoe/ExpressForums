const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/forums', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', ()=>{
    console.log('server is servering')
});

mongoose.connection.on('error', (err)=>{
    console.log(err, "Connection failed")
})

mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose disconnected')
})