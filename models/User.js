const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    displayName: String,
    googleId: String,
    dateCreated: { type: Date, default: Date.now },
    dateActivated: { type: Date, default: null }
});

mongoose.model('users', userSchema);