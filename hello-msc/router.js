const express = require('express');
const Author = require('./controllers/Authors');
const Books = require('./controllers/Books')

const router = express.Router();


router.get('/author', Author.getAll);
router.get('/authors/:id', Author.findById);
router.post('/authors', Author.createAuthor);
router.get('/books', Books.getAll);
router.get('/books/:id', Books.findById);
router.post('/books', Books.createBook);
router.delete('/books/:id', Books.deleteBook)

module.exports = router;