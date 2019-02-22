const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

// Import our google keys
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			// Validate for Admin User E-mail
			//
			if (profile.emails[0].value == keys.adminUserEmail) {
				const existingUser = await User.findOne({ googleId: profile.id });
				
				console.log('Admin user logged in!!!');

				if (existingUser) {
					return done(null, existingUser);
				}

				const user = await new User({
					googleId: profile.id,
					email: profile.emails[0].value,
					displayName: profile.displayName,
					isAdmin: true,
					dateActivated: Date.now()
				}).save();

				done(null, user);
			} else {
				// Check for e-mail in e-mails allowed list
				const existingUser = await User.findOne({
					email: profile.emails[0].value
				});

				// Is NOT a VALID USER
				if (!existingUser) {
					console.log(
						'Is NOT a VALID USER:',
						profile.emails[0].value
					);

					return done(null);
				} else {
					// Is a VALID USER but its not Activated yet
					if (existingUser.dateActivated == null) {
						existingUser.dateActivated = Date.now();
						existingUser.displayName = profile.displayName;

						existingUser.save();

						console.log(
							'Is a VALID USER just activated:',
							profile.emails[0].value
						);
					}

					done(null, existingUser);
				}
			}
		}
	)
);
