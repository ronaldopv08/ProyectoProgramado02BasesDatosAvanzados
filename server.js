const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const config = require('./configuration/connectDB');
const app = express();
const router = express.Router();

const db = config.mongoURI;

module.exports= () =>{
  mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
}

// Routes
/* const airportsRoutes = require('./javascript/routes/airportsRoutes');
const airlinesRoutes = require('./javascript/routes/airlinesRoutes');
const employeesRoutes = require('./javascript/routes/employeesRoutes');
const flightsRoutes = require('./javascript/routes/flightsRoutes');
const clientsRoutes = require('./javascript/routes/clientsRoutes');
const purchasesRoutes = require('./javascript/routes/purchasesRoutes');

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



app.use(router); */

app.listen(config.PORT, ()=> console.log(`Server on port ${config.PORT}`));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'tecPlaneApp',
  resave: true,
  saveUninitialized: true
}));
