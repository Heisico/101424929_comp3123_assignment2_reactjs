const express = require('express');
const { signup, login } = require('../controllers/userController');
const { check } = require('express-validator');
const router = express.Router();

router.post('/signup', [
  check('username', 'Username is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password should be 6 or more characters').isLength({ min: 6 })
], signup);

router.post('/login', login);

module.exports = router;
