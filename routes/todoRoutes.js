const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Joi = require('joi');

const Todo = mongoose.model('todos');

// GET all todos
//
router.get('/', requireLogin, async (req, res) => {
	await Todo.find({ _user: req.user.id }, '_id title description dateDue', {
		sort: { dateDue: 1 }
	}).then(function(todos) {
		res.send(todos);
	});
});

// GET todo
//
router.get('/:id', requireLogin, async (req, res) => {
	const { id } = req.params;

	const todo = await Todo.findOne({ _id: id, _user: req.user.id });

	res.send(todo);
});

// POST Add todo
//
router.post('/', requireLogin, async (req, res) => {
	// Validation
	const { error } = validateTodo(req.body);

	if (error) {
		// 400 Bad Request
		return res.status(400).send(result.error.details[0].message);
	}

	const todo = await new Todo({
		...req.body,
		_user: req.user.id
	}).save();

	res.send(todo);
});

// GET Toogle Task (listItem)
//
router.get('/:id/:taskId/:status', async (req, res) => {
	const { id, taskId, status } = req.params;

	await Todo.findOneAndUpdate(
		{
			_id: id,
			_user: req.user.id,
			items: {
				$elemMatch: { _id: taskId }
			}
		},
		{
			$set: {
				'items.$.dateDone': status === 'true' ? new Date() : null
			}
		},
		{ new: true }, // new: bool - if true, return the modified document rather than the original. defaults to false
		(error, todo) => {
			if (error) {
				return res.status(400).send({
					message: 'ToDo not found'
				});
			}

			res.send(todo);
		}
	);
});

// GET deletes a todo
//
router.get('/:id/delete', requireLogin, async (req, res) => {
	const { id } = req.params;

	await Todo.deleteOne({ _id: id, _user: req.user.id }, error => {
		if (error) {
			return res.status(400).send({
				message: 'ToDo not found'
			});
		}

		res.send(id);
	});
});

function validateTodo(todo) {
	const todoListItem = {
		title: Joi.string()
			.max(50)
			.required(),
		description: Joi.string().max(255)
	};

	const todoSchema = {
		title: Joi.string()
			.max(50)
			.required(),
		description: Joi.string().max(255),
		items: Joi.array()
			.items(todoListItem)
			.unique(),
		dateDue: Joi.date().required()
	};

	// Return result.
	return Joi.validate(todo, todoSchema);
}

module.exports = router;
