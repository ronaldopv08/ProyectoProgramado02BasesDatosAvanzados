const airports = require('../controllers/airportsController');

module.exports = (router) => {
    router.get('/airports', airports.getAirports);
    router.post('/addAirports', airports.createAirports);
    router.get('/deleteAirport/:id', airports.deleteAirport);
    router.get('/editAirport/:id', airports.findAirport);
    router.post('/editAirport/:id', airports.updateAirport);
}