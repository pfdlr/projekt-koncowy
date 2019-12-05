const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all products
//router.route('/products').get(ProductController.getProducts);

//single product
//router.route('/product/:id').get(ProductController.getSingleProduct);

// add product
//router.route('/products').post(ProductController.addProduct);

// get products by range
router.route('/products/range/:startAt/:limit').get(ProductController.getProductsByRange);

module.exports = router;