const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
	app.get('/api/users', async (req, res) => {
		User.find({}).then(function(users) {
			res.send(users);
		});
	});
};
