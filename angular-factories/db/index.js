const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false});

const Todo = db.define('todo', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}  
});

const syncAndSeed = () => {
	return db.sync({ force: true })
	  .then( () => {
	  	return Promise.all([
	  		Todo.create({ name: 'foo' }),
	  		Todo.create({ name: 'bar' })
	  		]);
	  });
};

module.exports = {
	syncAndSeed: syncAndSeed,
	models: {
		Todo: Todo
	}
};