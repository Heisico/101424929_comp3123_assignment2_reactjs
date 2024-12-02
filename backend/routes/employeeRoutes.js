const express = require('express');
const {
  getEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee
} = require('../controllers/employeeController');
const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
router.get('/:eid', getEmployeeById);
router.put('/:eid', updateEmployee);
router.delete('/:eid', deleteEmployee);

module.exports = router;
