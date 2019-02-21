const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.get('/api/todos', requireLogin, (req, res) => {
        res.send({ 'route': '/api/todos' });
    });
};