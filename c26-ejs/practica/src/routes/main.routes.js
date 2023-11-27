const express = require('express');
const router = express.Router();
const controllers = require('../controllers/main.controllers')


// vista home http://localhost:3000/ GET
router.get('/', controllers.home);

// vista contacto http://localhost:3000/contacto GET
router.get('/contacto', controllers.contact);

// info req params http://localhost:3000/info/funciona GET
router.get('/info/:id', controllers.infoParams)

module.exports = router;