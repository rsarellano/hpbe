const express = require('express')
const router = express.Router
const userController = require('../../controllers/users/Users')

router.post('/createUsers', userController)

module.exports = router