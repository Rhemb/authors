const authorController = require("../controllers/authorController");

module.exports = app => {
    app.get('/api/authors', authorController.findAllAuthors);
    app.get('/api/authors/:id', authorController.findAuthor);
    app.post('/api/authors', authorController.createAuthor);
    app.patch('/api/authors/:id', authorController.updateAuthor);
    app.delete('/api/authors/:id', authorController.deleteAuthor);
}