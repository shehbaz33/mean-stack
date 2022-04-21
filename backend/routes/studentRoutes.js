const express = require('express')
const {getAllStudent,getStudentById,createStudent,updateStudent,deleteStudent} = require('../controller/studentController')

const router = express.Router()

router.get('/',getAllStudent)
router.get('/:id',getStudentById)
router.post('/',createStudent)
router.put('/:id',updateStudent)
router.delete('/:id',deleteStudent)

module.exports = router