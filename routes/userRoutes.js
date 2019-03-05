const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Joi = require('joi');

const User = mongoose.model('users');
const Todo = mongoose.model('todos');

module.exports = app => {
	// GET all users
	//
	app.get('/api/users', requireLogin, async (req, res) => {
		await User.find({}, '_id displayName email isAdmin', {
			sort: { _id: 1, displayName: 1 }
		}).then(function(users) {
			res.send(users);
		});
	});

	// POST add a new user
	//
	app.post('/api/users', requireLogin, async (req, res) => {

		const schema = {
			email: Joi.string().email({ minDomainAtoms: 2 }).required(),
			displayName: Joi.string().max(100).required()
		};

		// Return result.
		const result = Joi.validate(req.body, schema);

		if (result.error) {
			// 400 Bad Request
			res.status(400).send(result.error.details[0].message);
			return;
		}

		const { email, displayName } = req.body;

		// First check if we already have a user with that e-mail
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			res.status(400).send({
				message: 'User e-mail already exists'
			});
			return;
		}

		const user = await new User({
			email,
			displayName
		}).save();

		res.send(user);
	});

	// GET deletes a user
	//
	app.get('/api/users/:id/delete', requireLogin, async (req, res) => {
		const { id } = req.params;

		// Deletes Todo's User
		await Todo.deleteMany({ _user: id }, error => {
			if (error) {
				res.status(400).send({
					message: "Problem trying to delete user todo's"
				});
			}
		});

		// Deleted User
		await User.deleteOne({ _id: id }),
			error => {
				if (error) {
					res.status(400).send({
						message: 'Problem trying to delete user'
					});
				}
			};

		res.send(id);
	});
};
