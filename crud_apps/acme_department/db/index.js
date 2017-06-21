const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL ,{ logging :  false});

//connection variable
let _conn;


//Customer Table
const Customer = db.define('customer', {
	name: Sequelize.STRING,
});

Customer.makeCustomer = (custId) => {
	return Department.getDefault()
	.then( (result) => {
		return Customer.update({
			departmentId: result[0].get().id
		}, {
			where: { id: custId },
			//options enable to return the affected row
			returning: true,
			// option to return the object without metadata
			plain: true
		});
	})
	.then( (result) => result[1].dataValues);
};


//Department Table
const Department = db.define('department', {
	name: Sequelize.STRING,
	isDefault: Sequelize.BOOLEAN
});

Department.getDefault = () => {
	return Department.findAll({
		where: { isDefault: true }
	});
};

Department.updateDefaultDept = (deptId) => {
	return Department.getDefault()
	.then ( (result) => {

		//update old default and return result
		let updateOldDefault = result[0].update( { isDefault: false}, 
		{ where: { id: result.id }, returning: true, plain: true });

		//update new default and return result
		let updateNewDefault = Department.update( { isDefault: true }, 
		{ where: { id: deptId }, returning: true, plain:true });

		return Promise.all([ updateOldDefault , updateNewDefault ]);
	})
	// returns the array [ updated old data, updated new data];
	.then( (resultArr) => [ resultArr[0].dataValues , resultArr[1][1].dataValues ]);
};


//Define Relationship
Customer.belongsTo(Department);
Department.hasMany(Customer);


//connection, return connection if its already established, also used by testing
function connect(){
	if ( _conn ){
		return _conn;
	} else {
		_conn = db.authenticate();
		return _conn;
	}
}



//seed function - mostly for testing
function seed(){
	//connect to database
	return connect()
	.then( () => db.sync({ force: true }))
	.then( () => {
		let fooDepartment = Department.create({ name: 'foo', isDefault : true });
		let barDepartment = Department.create({ name: 'bar'});
		let buzzCustomer = Customer.create({ name: 'buzz'});

		return Promise.all([fooDepartment,barDepartment,buzzCustomer]);
	})
	.then( (result) => {
		return [ result[0], result[1], result[2]]; 
	});
}

module.exports = {
	models: {
		Customer: Customer,
		Department: Department
	},
	seed: seed
};



