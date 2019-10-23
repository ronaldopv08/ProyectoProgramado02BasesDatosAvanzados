const Clients = require('../controllers/clientsController');

module.exports = (router) => {
    //CRUD de clients
    router.get('/Clients', Clients.getClients);
    router.post('/addClients', Clients.createClients);
    router.get('/deleteClient/:id', Clients.deleteClient);
    router.get('/findClient/:id', Clients.findClient);
    router.post('/editClient/:id', Clients.updateClient);
}