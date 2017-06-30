const router = require('express').Router();
const Todo = require('../db/').models.Todo;
module.exports = router;

router.get('/', (req,res,next) => {
	Todo.findAll()
	  .then( (todos) => res.send(todos))
	  .catch(next);
});

router.delete('/:id', (req,res,next) => {
	Todo.destroy({
		where: { id: req.params.id }
	})
	.then( (todos) => res.sendStatus(200))
	.catch(next);
});

router.post('/', (req,res,next) => {
	Todo.create({
		name: req.body.name
	})
	.then( (todo) => res.send(todo))
	.catch(next);
});