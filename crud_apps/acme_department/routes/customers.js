const router = require('express').Router();
const db = require('../db/index').models;

router.get('/' ,(req,res,next) => {
	db.Customer.findAll({
		where: { departmentId: null}
	})
	.then( (customersData) => {
		res.render('customer', {title: 'Customer', customersData: customersData });
	})
	.catch(next);
});

router.post('/newEmployee', (req,res,next) => {
	db.Customer.create({
		name: req.body.employee_name
	})
	.then( () => {
		res.redirect('/customers');
	})
	.catch(next);
});

router.delete('/delete/:custId', (req,res,next) => {
	db.Customer.destroy({
		where: { id: req.params.custId}
	})
	.then( () => res.redirect('/customers'))
	.catch(next);
});

router.put('/makeUser/:custID', (req,res,next) => {
	db.Department.getDefault()
	.then( (defaultDepId) => {
		db.Customer.update({
			departmentId: defaultDepId[0].get().id },
			{ where: { id: req.params.custID }
		})
		.then( () => res.redirect('/department'))
		.catch(next);
	});
});

module.exports = router;

