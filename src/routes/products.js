// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ middlewares require ************
const {uploadImageProduct} = require('../middlewares/uploadFiles'); 

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/store', uploadImageProduct.single('image', 3), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
