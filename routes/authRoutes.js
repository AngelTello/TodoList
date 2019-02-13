const passport = require('passport');

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
    
    app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};