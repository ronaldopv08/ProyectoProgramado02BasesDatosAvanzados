const clients = require('../controllers/clientsController');

module.exports = (router) => {
    //CRUD de clients
    router.get('/clients', clients.getClients);
    router.post('/addClients', clients.createClients);
    router.get('/deleteClient/:id', clients.deleteClient);
    router.get('/findClient/:id', clients.findClient);
    router.post('/editClient/:id', clients.updateClient);
}