// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { login, profile, register, processRegister, processLogin, logout } = require('../controllers/usersController');
// ************ Middleware Require ************
const userLogged = require('../middlewares/userLogged')

router.get('/login', login)
router.post('/login', processLogin)

router.get('/profile', userLogged ,profile)

router.get('/register', register)
router.post('/register', processRegister)

router.get('/logout', logout)


module.exports = router;
