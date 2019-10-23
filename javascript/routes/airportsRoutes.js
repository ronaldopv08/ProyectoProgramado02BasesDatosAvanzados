const Airports = require('../controllers/airportsController');

module.exports = (router) => {
    //CRUD de libros
    router.get('/books', Books.getBooks);
    router.post('/addBooks', Books.createBook);
    router.get('/deleteBook/:id', Books.deleteBook);
    router.get('/editBook/:id', Books.findBook);
    router.post('/editBook/:id', Books.updateBook);
}