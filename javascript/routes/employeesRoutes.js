const employees = require('../controllers/employeesController');

module.exports = (router) => {
    //CRUD de employees
    router.get('/employees', employees.getEmployees);
    router.post('/addEmployees', employees.createEmployees);
    router.get('/deleteEmployee/:id', employees.deleteEmployee);
    router.get('/findEmployee/:id', employees.findEmployee);
    router.post('/editEmployee/:id', employees.updateEmployee);
}