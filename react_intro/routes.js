const app = require('express').Router();
const models = require('./db').models;

module.exports = app;

app.get('/users', (req, res, next) => {
  models.User.findAll()
	  .then( users => res.send(users))
	  .catch(next);
});

app.delete('users/:id', (req, res, next) => {
	models.User.destroy({ where: {id: req.params.id }})
	  .then( () => res.sendStatus(200))
	  .catch(next);
});