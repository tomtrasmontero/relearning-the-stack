const router = require('express').Router();
const db = require('../db/index').models;

router.get('/', (req,res,next) => {
	Promise.all([db.Department.findAll(),db.Customer.findAll()])
	.then( (data) => {
		let [deptData, custData] = data;
		let allDeptInfo = deptData.map( (curr,idx,arr) => curr.get());
		let allCustInfo = custData.map( (curr, idx, arr) => curr.get());
		let defaultDept = allDeptInfo.filter( (ele, idx, arr) => ele.isDefault === true);
		res.render('department', {title: 'Department', customerInfo: allCustInfo ,defaultDept : defaultDept[0], deptsInfo: allDeptInfo});
	})
	.catch(next);
});

router.post('/add', (req,res,next) => {
	db.Department.create({
		name: req.body.department_name
	})
	.then( () => {
		console.log('department created');
		res.redirect('/department');
	})
	.catch(next);
});

router.post('/update', (req,res,next) => {
	db.Department.updateDefaultDept(req.body.departmentId)
	.then( () => res.redirect('/department'))
	.catch(next);
});

router.post('/newEmployee/:defDeptId', (req,res,next) => {
	db.Customer.create({
		name: req.body.employee_name,
		departmentId: req.params.defDeptId
	})
	.then( () => res.redirect('/department'))
	.catch(next);
});

router.delete('/delete/:custId', (req,res,next) => {
	db.Customer.destroy({
		where: { id: req.params.custId}
	})
	.then( () => res.redirect('/department'))
	.catch(next);
});

router.put('/makeCustomer/:custId', (req,res,next) => {
	db.Customer.update({
		departmentId: null},
		{ where: { id: req.params.custId }
	})
	.then( () => res.redirect('/department'))
	.catch(next);
});

module.exports = router;