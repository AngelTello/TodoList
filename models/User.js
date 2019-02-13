const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    displayName: String,
    googleId: String
});

mongoose.model('users', userSchema);