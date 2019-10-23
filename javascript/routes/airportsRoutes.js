const Airports = require('../controllers/airportsController');

module.exports = (router) => {
    router.get('/airports', Airports.getBooks);
    router.post('/addAirports', Airports.createBook);
    router.get('/deleteAirports/:id', Airports.deleteBook);
    router.get('/editAirports/:id', Airports.findBook);
    router.post('/editAirports/:id', Airports.updateBook);
}