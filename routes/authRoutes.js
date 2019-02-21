const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // User will get authenticated using his Google account and then once thats done
    // ... he will be redirected to our dashboard component '/surveys'
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/todos');
		}
    );
    
    app.get('/api/logout', requireLogin, (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', requireLogin, (req, res) => {
		res.send(req.user);
	});
};