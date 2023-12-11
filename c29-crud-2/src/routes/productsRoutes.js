// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve(__dirname, '../../public/images/products'))
    },
    filename:(req,file,cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    }
})

const upload = multer({storage});

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', upload.single('img'), productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', upload.single('img'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
