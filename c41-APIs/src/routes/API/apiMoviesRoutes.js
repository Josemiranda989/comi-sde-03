const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/API/apiMoviesController');

router.get('/', moviesController.list);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recommended);
router.get('/detail/:id', moviesController.detail);
router.get('/toy-story', moviesController.toyStoryExist);

router.post('/create', moviesController.createMovie);


module.exports = router;