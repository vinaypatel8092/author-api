const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/createbook', bookController.createBook);
router.get('/books', bookController.getBooks);

module.exports = router;
