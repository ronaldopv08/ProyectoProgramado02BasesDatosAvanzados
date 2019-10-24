const clients = require('../controllers/clientsController');
const express = require('express');
const router = express.Router();

/*module.exports = (router) => {
    //CRUD de clients
    router.get('/views/manager/clients', clients.getClients);
    router.post('/', clients.createClients);
    router.get('/views/manager/clients', clients.deleteClient);
    router.get('/views/manager/clients', clients.findClient);
    router.post('/', clients.updateClient);
}
*/

router.get('/clients/add', (req,res) => {
    res.render('manager/clients.html');
});

router.post('./views/manager/clients.html', (req,res) => {
    console.log(req.body);
    res.send('ok');
});

module.exports = router;