const express = require('express');
const router = express.Router();
const Employee = require('../models/emp_model.js');

//get all employees
router.get('/', (req, res) => {
    Employee.find(function(err, employees) {
        if(err) {
            res.json(err);
        } else {
            res.json(employees);
        }
    });
});

//get single employee
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, function(err, employee) {
        if(err) {
            res.json(err);
        } else {
            res.json(employee);
        }
    });
});

//add employee
router.post('/add', (req, res) => {
    let newEmployee = new Employee(req.body);
    newEmployee.save((err, employee) => {
        if(err) {
            res.json(err);
        } else {
            res.json(employee);
        }
    });
});

//update employee
router.put('/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, (err, employee) => {
        if(err) {
            res.json(err);
        } else {
            res.json(employee);
        }
    });
});

//delete employee
router.delete('/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, employee) => {
        if(err) {
            res.json(err);
        } else {
            res.json(employee);
        }
    });
});

//export router
module.exports = router;
