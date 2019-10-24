const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const router = express.Router();
var engine = require('consolidate');
const connectDb = require('./configuration/server');
const config = require('./configuration/connectDB');
var clientsRoutes = require('./javascript/routes/clientsRoutes');
const exphbs = require('express-handlebars');
connectDb();




module.exports = router;

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


*/
app.use(router);
app.use('/clients',clientsRoutes);
app.post('/view/manager/clients',clientsRoutes);
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/javascript'));
app.listen(config.PORT, ()=> console.log(`Server on port ${config.PORT}`));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
//app.engine('html',engine.mustache);
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'tecPlaneApp',
  resave: true,
  saveUninitialized: true
}));
