const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Email: String,
        Password: String,


    })
module.exports = new mongoose.model('user', UserSchema)