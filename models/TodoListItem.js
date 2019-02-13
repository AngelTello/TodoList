const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoListItem = new Schema({
    title: String,
    description: String,
    dateDone: { type: Date, default: null },
    dateCreated: Date
});

module.exports = todoListItem