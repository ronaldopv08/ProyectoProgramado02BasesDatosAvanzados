const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const router = express.Router();

const db = config.get('mongoURI');

const airportsRoutes = require('../routes/airportsRoutes');
const airlinesRoutes = require('../routes/airlinesRoutes');
const employeesRoutes = require('../routes/employeesRoutes');
const flightsRoutes = require('../routes/flightsRoutes');
const clientsRoutes = require('../routes/clientsRoutes');
const purchasesRoutes = require('../routes/purchasesRoutes');


module.exports= () =>{
  mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
}

/*
clientsRoutes(router)
router.get('/clients', clientsRoutes);
airportsRoutes(router)
router.get('/airports', airportsRoutes);
airlinesRoutes(router)
router.get('/airlines', airlinesRoutes);
employeesRoutes(router)
router.get('/employees', employeesRoutes);
flightsRoutes(router)
router.get('/flights', flightsRoutes);
purchasesRoutes(router)
router.get('/purchases', purchasesRoutes);

app.use(router);
*/

