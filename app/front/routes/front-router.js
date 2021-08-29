const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');

// Routes
router.get('/', pagesController.index);
router.get('/create', pagesController.form);
router.post('/create', pagesController.create);
router.get('/servicios', pagesController.services);
router.get('/productos', pagesController.products);

module.exports = router;