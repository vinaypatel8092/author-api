const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.post('/register', authorController.registerAuthor);
router.get('/allbooks', authorController.getAllBooks);

module.exports = router;
