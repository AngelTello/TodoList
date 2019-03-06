const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get(
	'/',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

// User will get authenticated using his Google account and then once thats done
// ... he will be redirected to our dashboard component '/surveys'
router.get(
	'/callback',
	passport.authenticate('google', { failureRedirect: '/usernotvalid' }),
	(req, res) => {
		res.redirect('/home');
	}
);

module.exports = router;
