const Sequelize = require('sequelize');

//access into database access based on package.json
const db = new Sequelize(process.env.CONN);

//create database tables
//name of category
const Category = db.define('category', {
	name: Sequelize.STRING
});

//new way to have a class method in Category.
Category.findByName = function(name){
	return this.findAll({
		where: {name: name}
	});
};

const Product = db.define('product', {
	name: Sequelize.STRING
});

let _conn;

function connect(){
	if( _conn){
		return _conn;
	} else {
		//db.authenticate() returns a promise
		_conn = db.authenticate();
		return _conn;
	}
}

function seed() {
//connect to database
	return connect()
	.then( () => db.sync({ force: true }))
	.then( () => {
		let fooCreate = Category.create({ name: 'foo'} );
		let barCreate = Category.create({ name: 'bar'} );
		return Promise.all([ fooCreate, barCreate]);
	}) 

}

module.exports = {
	models: {
		Category: Category,
		Product: Product
	},
	seed: seed
};