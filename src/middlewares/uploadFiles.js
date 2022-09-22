const path = require('path');
const multer = require('multer');

const storageImageProducts = multer.diskStorage({
     destination: (req, file ,callback) => {
           callback(null, './public/images/products')
     },

    filename : (req,files,callback) => {
        callback(null, 'product-' + Date.now() + path.extname(files.originalname))
    }
});

const uploadImageProduct = multer({
    storage : storageImageProducts
})

module.exports = {
   uploadImageProduct
}