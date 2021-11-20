const express = require('express');
const router = express.Router();
const Task = require('../models/task_model.js');

//get all tasks

router.get('/', (req, res) => {
    Task.find(function(err, tasks) {
        if(err) {
            res.json(err);
        } else {
            res.json(tasks);
        }
    });
});

//get single task
router.get('/:id', (req, res) => {
    Task.findById(req.params.id, function(err, task) {
        if(err) {
            res.json(err);
        } else {
            res.json(task);
        }
    });
});

//add task
router.post('/', (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((err, task) => {
        if(err) {
            res.json(err);
        } else {
            res.json(task);
        }
    });
});

//update task
router.put('/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, (err, task) => {
        if(err) {
            res.json(err);
        } else {
            res.json(task);
        }
    });
});

//delete task
router.delete('/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, task) => {
        if(err) {
            res.json(err);
        } else {
            res.json(task);
        }
    });
});

//export router
module.exports = router;
