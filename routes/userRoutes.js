const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
	// GET all users
	//
	app.get('/api/users', async (req, res) => {
		User.find({}).then(function(users) {
			res.send(users);
		});
	});

	// POST add a new user
	//
	app.post('/api/users', async (req, res) => {
		const { email, displayName } = req.body;

		// First check if we already have a user with that e-mail
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			res.status(400).send({
				message: 'User e-mail already exists'
			});
		}

		const user = await new User({
			email,
			displayName
		}).save();

		res.send(user);
	});

	app.get('/api/users/:id', async (req, res) => {
		const { id } = req.params;

		await User.deleteOne({ _id: id }, error => {
			if (error) {
				res.status(400).send({
					message: 'User not found'
				});
			}

			res.send(id);
		});
	});
};