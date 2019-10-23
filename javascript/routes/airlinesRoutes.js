const airlines = require('../controllers/airlinesController');

module.exports = (router) => {
    router.get('/airlines', airlines.getAirlines);
    router.post('/addAirlines', airlines.createAirlines);
    router.get('/deleteAirline/:id', airlines.deleteAirline);
    router.get('/editAirline/:id', airlines.findAirline);
    router.post('/editAirline/:id', airlines.updateAirline);
}