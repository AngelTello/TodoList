const mongoose = require('mongoose');
const { Schema } = mongoose;
const TodoListItemSchema = require('./TodoListItem');

const todoSchema = new Schema({
    title: String,
    description: String,
    type: { type: String, default: 'list' }, // Possible values: 'list', 'task list', 'ordered list'
    items: [TodoListItemSchema],
    dateCreated: { type: Date, default: Date.now },
    dateDue: { type: Date, default: null },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('todos', todoSchema);