const flights = require('../controllers/flightsController');

module.exports = (router) => {
    //CRUD de flight
    router.get('/flights', flights.getFlights);
    router.post('/addFlights', flights.createFlights);
    router.get('/deleteFlight/:id', flights.deleteFlight);
    router.get('/findFlight/:id', flights.findFlight);
    router.post('/editFlight/:id', flights.updateFlight);
}