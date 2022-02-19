const express = require('express')
const router = express.Router()
const categoryValidation = require('../validations/categoryValidation')
const categoryController = require('../controllers/categoryController')

router.post('/create-category',categoryValidation,categoryController.create)


module.exports = router