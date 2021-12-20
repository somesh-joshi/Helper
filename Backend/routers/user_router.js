const express = require('express');
const router = express.Router();
const User = require('../models/user_model.js');
const bcrypt = require('bcrypt');

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
router.post('/add', async (req, res) => {
    req.body.password = await bcrypt.hashSync(req.body.password, 10);
    let newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err) {
            res.send({message: 'Error'});
        } else {
            res.send({message: 'User added successfully'});
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

// check login
router.post('/login', async (req, res) => {
    let user = await User.findOne({user_name: req.body.user_name});
    if(user) {
        if(await bcrypt.compareSync(req.body.password, user.password)) {
            res.send({name: user.name, user_name: user.user_name, email: user.email, number: user.number});
        } else {
            res.send({message: 'Invalid password'});
        }
    } else {
        res.send({message: 'Invalid username'});
    }
});


//export router
module.exports = router;