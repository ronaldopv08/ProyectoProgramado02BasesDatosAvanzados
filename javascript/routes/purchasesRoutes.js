const purchases = require('../controllers/purchasesController');

module.exports = (router) => {
    //CRUD de purchase
    router.get('/purchases', purchases.getPurchases);
    router.post('/addPurchases', purchases.createPurchases);
    router.get('/findPurchase/:id', purchases.findPurchase);
    router.post('/editPurchase/:id', purchases.updatePurchase);
}