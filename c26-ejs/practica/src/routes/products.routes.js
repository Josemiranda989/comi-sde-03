const express = require('express');
const controllers = require('../controllers/products.controllers');
const router = express.Router();

// http://localhost:3000/products/detail GET
router.get('/detail/:id', controllers.detail)
// http://localhost:3000/products/create GET
router.get('/create', controllers.create)

router.get('/search', controllers.search)

module.exports = router;