const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Todo = mongoose.model('todos');

module.exports = app => {
    // GET all todos
	//
    app.get('/api/todos', requireLogin, async (req, res) => {
        const todos = await Todo
            .find({ _user: req.user.id })
            .select({ items: false }); // This line excludes the subcollection: items
        
        res.send(todos);
    });

    // POST todo
    //
    app.post('/api/todos', requireLogin, async (req, res) => {
        const todo = await new Todo({
			...req.body, _user: req.user.id
        }).save();
        
        res.send(todo);
    });

    // GET deletes a todo
    //
    app.get('/api/todos/:id', requireLogin, async (req, res) => {
        const { id } = req.params;

        await Todo.deleteOne({ _id: id, _user: req.user.id }, error => {
            if (error) {
                res.status(400).send({
                    message: 'ToDo not found'
                });
            }

            res.send(id);
        });
    })
};