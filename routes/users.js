const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get all the users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch {
        res.json({message: err} );
    };
});

//Post a new user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
        const savedPost = await user.save();
        res.json(savedPost);
    } catch (err){
        res.json({message: err});
    };
});

//Get a specific user
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch {
        res.json({message: err} );
    };
});

//Delete a specific user
router.delete('/:userId', async (req, res) => {
    try{
        const user = await User.remove({_id: req.params.userId});
        res.json(user);
    } catch {
        res.json({message: err} );
    };
});


//Update a specific user
router.patch('/:userId', async (req, res) => {
    async function getUserById(userId){
        return  await User.findById(userId);
    };
    try {
        getUserById(req.params.userId).then(async result => {
            const user = await User.updateOne(
            {_id: req.params.userId},
            {$set: {name: req.body.name ? req.body.name : result.name,
                email: req.body.email ? req.body.email : result.email,
                age: req.body.age ? req.body.age : result.age,
                dateOfBirth: req.body.dateOfBirth ? req.body.dateOfBirth : result.dateOfBirth}});
            res.json(user);
        }).catch (err => {
            res.json({message: err} );
        })
    } catch {
        res.json({message: err} );
    }
});

module.exports = router;