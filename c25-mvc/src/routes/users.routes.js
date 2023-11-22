const express = require('express');
const router = express.Router();
const controllers = require('../controllers/users.controllers')

// listado de usuarios http://localhost:3000/users/
router.get('/', controllers.userList)
//perfil http://localhost:3000/users/profile
router.get('/profile', controllers.profile)

module.exports = router;