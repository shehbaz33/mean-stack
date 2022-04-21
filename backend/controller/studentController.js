const Student = require('../model/studentdata')

exports.getAllStudent = async (req,res) => {
    try {
        const student = await Student.find();
         res.status(200).send(student)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

exports.getStudentById = async (req,res) => {
    try {
        const {id} = req.params
        const student = await Student.findOne({_id: id})
        if(!student){
            res.status(400).json({
                success: false,
                message: 'Student not found'
            })
        }
        res.status(200).json({
            success: true,
            student
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Something went wrong'
        })
    }
}

exports.createStudent = async (req,res) => {
   const {name,email,gender,mobile} = req.body
   let student = new Student({
       name,
       email,
       gender,
       mobile
   })
   try {
       await student.save()
       res.status(200).json({
           success: true,
           student
       })
   } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
   }
}   

exports.updateStudent = async (req,res) => {
    try {
        const {id} = req.params
        const student = await Student.findOne({_id: id})
        if(!student){
            return res.status(400).json({
                success:false,
                message: 'Student with the id does not exists'
            })
        }
        const udpatedStudent = await Student.findByIdAndUpdate(id, {$set: req.body})
        res.status(200).json({
            success: true,
            message: 'Student updated successfuly',
        })       
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }

}

exports.deleteStudent = async (req,res) => {
    try {
        const {id} = req.params
        const student = await Student.findOne({_id: id})
        if(!student){
            return res.status(400).json({
                success:false,
                message: 'Student with the id does not exists'
            })
        }
        const deletedStudent = await Student.findByIdAndDelete({_id: id})
        res.status(200).json({
            success: true,
            message: 'Removed successfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
}