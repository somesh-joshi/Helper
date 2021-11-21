const express = require('express');
const router = express.Router();
const User = require('../models/user_model.js');

//get all users
router.get('/', (req, res) => {
    User.find(function(err, users) {
        if(err) {
            res.json(err);
        } else {
            res.json(users);
        }
    });
});

//get single user
router.get('/:id', (req, res) => {
    User.findById(req.params.id, function(err, user) {
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

//add user
router.post('/', (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

//update user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

//delete user
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) {
            res.json(err);
        } else {
            res.json(user);
        }
    });
});

//export router
module.exports = router;