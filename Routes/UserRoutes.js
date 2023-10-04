const express = require('express');
const router = express.Router();
const User = require('./Models/UserSchema')


//add a user 
//@POST

router.post('/', async (req, res) => {
    //method 1 using create()
    const NewUser = await User.create(req.body)
    res.json(NewUser)
})

module.exports = router