const { Router } = require('express');
const { getProducts, getProduct, postProduct, putProduct, deleteProduct } = require('../controllers/products');

const router = Router();

router.get('/', getProducts);

router.get('/', getProduct);

router.post('/', postProduct);

router.put('/', putProduct);

router.delete('/', deleteProduct);

module.exports = router;