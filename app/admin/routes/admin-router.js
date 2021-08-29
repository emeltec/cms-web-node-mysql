const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

//Routes: auth
router.get('/', authController.index);
router.get('/login', authController.login);
router.get('/registrar-usuario', authController.viewRegisterUser);
router.post('/registrar-usuario', authController.registerUserDB);

//Routes: blogs
router.get('/blogs', adminController.blogs);
router.get('/crear-blog', adminController.blogCreate);

module.exports = router;