const express = require('express')
const router = express.Router()
const categoryValidation = require('../validations/categoryValidation')
const categoryController = require('../controllers/categoryController')
const Authorization = require('../services/Authorization')

router.post('/create-category',[categoryValidation,Authorization.authorized],categoryController.create)
router.get('/category',categoryController.fatch)

module.exports = router