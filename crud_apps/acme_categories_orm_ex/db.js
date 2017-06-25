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
		where: {name: name},
		include: [ Product ]
	});
};

const Product = db.define('product', {
	name: Sequelize.STRING
});


//define relationship
Product.belongsTo(Category);
Category.hasMany(Product);


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
let categories;

//connect to database
	return connect()
	.then( () => db.sync({ force: true }))
	.then( () => {
		let fooCreate = Category.create({ name: 'foo'} );
		let barCreate = Category.create({ name: 'bar'} );
		return Promise.all([ fooCreate, barCreate]);
	})
	.then( (result) => {
		categories = result
		return Product.create({ name: 'buzz', categoryId: categories[0].id});
	})
	.then( () => categories )

}

module.exports = {
	models: {
		Category: Category,
		Product: Product
	},
	seed: seed
};