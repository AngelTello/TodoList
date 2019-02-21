const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// Import our google keys
const keys = require('./config/keys');

// Implement our Mongoose Models
//
require('./models/User');
require('./models/Todo');

// Implement our GoogleStrategy
//
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Section used to Wireup our app Middlewares
//
app.use(bodyParser.json());
app.use(
	// Let's indicate express that we need to use cookies inside of our application
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Import and execute returned function from authRoutes passing as parameter app
require('./routes/authRoutes')(app);
require('./routes/todoRoutes')(app);
require('./routes/userRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
