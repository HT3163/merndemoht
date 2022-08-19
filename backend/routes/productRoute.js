const express = require('express');
const router = express.Router();
const {createProduct,getProduct} = require('../controllers/productController');



router.route('/createproduct').post(createProduct);

router.route('/products').get(getProduct);


module.exports = router