const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/student'
const cors = require('cors')

// Connecting to mongodb
mongoose.connect(url,{useNewUrlParser: true});




const app = express()

// Parsing post request
app.use(express.json());

// Cors middle ware
app.use(cors())


// Usingroutes
app.use('/api/v1/student',require('./routes/studentRoutes'))


// Looking for db connection error
try {
    mongoose.connection.on('connected',() => {
        console.log('DB Connected')
    })
} catch (error) {
    console.log(error)
}

app.listen(5000,() => {
    console.log('Server is running on port 5000')
})