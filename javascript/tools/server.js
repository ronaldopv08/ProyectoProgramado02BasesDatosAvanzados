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

userRoutes(router)
router.get('/', userRoutes);
booksRoutes(router)
router.get('/books', booksRoutes);
librariesRoutes(router)
router.get('/libraries', librariesRoutes);
salesRoutes(router)
router.get('/sales', salesRoutes);
deliveriesRoutes(router)
router.get('/deliveries', deliveriesRoutes);

app.use(router);


