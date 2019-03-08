# TodoList
Fullstack web app with NodeJS, React, Redux, Express, and MongoDB

## npm modules required
use: npm install

## other requirements
Google+API keys You can have those free here: http://console.developers.google.com
<br>MongoDB URI You can have a free mongoDB here: https://mlab.com/

## configuration required
in path: /config
<br>create a new file: dev.js ...then set your our values:

<pre><code>// dev.js - don't commit this!!!
module.exports = {
    googleClientID: 'yourGoogleClientId', // These 2 keys uses Google+ API used for user authentication
    googleClientSecret: 'yourGoogleClientSecret',
    mongoURI: 'yourMongoDbURI',
    cookieKey: 'yourcookiekey',
    adminUserEmail: 'yourAdminUserEmail' // this code only work with a valid google e-mail address
};</code></pre>

## Run application
use: npm run dev
