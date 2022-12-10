const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProducts);

router.get('/products', adminController.getAdminProducts);

module.exports = router;
