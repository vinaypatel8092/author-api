const Book = require('../models/book');
const Author = require('../models/author');

class BookService {
    async createBook(data) {
        const book = new Book(data);
        const savedBook = await book.save();
        
        const authorFound = await Author.findOne(data);
        savedBook.author = authorFound._id;

        return savedBook;
    }

    async getBooks() {
        return await Book.find().populate('author');
    }
}

module.exports = new BookService();
