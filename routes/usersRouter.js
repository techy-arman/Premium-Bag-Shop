const express = require('express')
const router = express.Router()
const userModel = require('../models/user-model')
const isLoggedin = require("../middlewares/isLoggedin")
const {registerUser,loginUser,logout} = require("../controllers/authController")



router.get('/', (request, response) => {
    response.send('Users Router')
})
router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/logout', logout);

module.exports = router;