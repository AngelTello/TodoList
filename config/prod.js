// prod.js - production keys here!!!
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    adminUserEmail: process.env.ADMIN_USER_EMAIL
    // redirectDomain: process.env.REDIRECT_DOMAIN
};