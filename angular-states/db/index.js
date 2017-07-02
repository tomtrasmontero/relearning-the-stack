const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const Todo = db.define('todo', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

//use to clear database after each test
const sync = () => {
	return db.sync({ force: true });
};

const truncate = () => {
	return Todo.destroy({ where: {} });
};

module.exports ={
	models: {
		Todo : Todo
	},
	sync: sync,
	truncate: truncate
};