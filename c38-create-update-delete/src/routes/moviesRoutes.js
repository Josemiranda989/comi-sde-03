const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recomended);
router.get('/detail/:id', moviesController.detail);


// Create y process create
router.get('/create', moviesController.create);
router.post('/create', moviesController.processCreate);
// Update y process Update
router.get('/update/:id', moviesController.update);
router.put('/update/:id', moviesController.processUpdate);
// Delete y process Delete
router.get('/delete/:id', moviesController.delete);
router.delete('/delete/:id', moviesController.processDelete);

module.exports = router;