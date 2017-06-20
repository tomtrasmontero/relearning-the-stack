const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL ,{ logging :  false});

//Test the connection by trying to authenticate Aliases.  returns a promise object
//code belows read as if there is a connection, console log connection

const Customer = db.define('customer', {
	name: Sequelize.STRING
});

const Department = db.define('department', {
	name: Sequelize.STRING,
	isDefault: Sequelize.BOOLEAN
});









db.authenticate()
	.then((result) => {
		console.log('db connection is a go!!');
});




// let _conn;
// 
// function connect(){
// 	if( _conn ){
// 		return _conn;
// 	} else {
// 		_conn = db.authenticate();
// 		console.log('connected to server');
// 		return _conn;
// 	}
// }

module.exports = {
	models: {
		Customer: Customer,
		Department: Department
	}
};



