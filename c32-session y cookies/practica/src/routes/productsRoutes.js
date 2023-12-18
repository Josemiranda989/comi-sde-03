// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Multer Require ************
const upload = require('../middlewares/multer')
// ************ Validate Require ************
const validateProducts = require('../middlewares/validateProducts');
// ************ Controller Require ************
const productsController = require('../controllers/productsController');
// ************ Middlewares Require ************
const adminLogged = require('../middlewares/adminLogged')

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminLogged,productsController.create); 
router.post('/create', upload.single('img'), validateProducts, productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', adminLogged,productsController.edit); 
router.put('/edit/:id', upload.single('img'), validateProducts,productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
