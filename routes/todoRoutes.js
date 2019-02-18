module.exports = app => {
    app.get('/api/todos', (req, res) => {
        res.send({ 'route': '/api/todos' });
    });
};