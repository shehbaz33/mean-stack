const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required:true
    },
    mobile: {
        type: String,
        requrie: true
    }
})

const studentData = mongoose.model('studentdata',studentSchema);

module.exports = studentData