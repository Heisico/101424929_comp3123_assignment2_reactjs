const Employee = require('../models/employee');

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
};

exports.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json({ message: 'Employee created', employee_id: newEmployee._id });
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.eid);
  res.status(200).json(employee);
};

exports.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.eid, req.body);
  res.status(200).json({ message: 'Employee updated' });
};

exports.deleteEmployee = async (req, res) => {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.eid);
  
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
  
    res.status(200).json({ message: 'Employee deleted successfully' }); 
  };
  
  