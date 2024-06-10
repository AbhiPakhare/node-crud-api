const express = require('express')
const router = express.Router();
const {index, create, show, update, deleteProduct} = require('../controllers/product.controller.js')

//index page
router.get('/', index)
router.post('/', create)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', deleteProduct)


module.exports = router;
