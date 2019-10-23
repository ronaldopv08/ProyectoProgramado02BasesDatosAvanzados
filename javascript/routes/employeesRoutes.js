const employees = require('../controllers/employeesController');

module.exports = (router) => {
    //CRUD de employees
    router.get('/employees', employees.getEmployees);
    router.post('/addEmployees', employees.createEmployees);
    router.get('/deleteEmployees/:id', employees.deleteEmployees);
    router.get('/findEmployees/:id', employees.findEmployees);
    router.post('/editEmployees/:id', employees.updateEmployees);
}