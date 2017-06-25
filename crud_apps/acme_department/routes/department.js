const router = require('express').Router();
const db = require('../db/index').models;

router.get('/', (req,res,done) => {	
	Promise.all([db.Department.findAll(),db.Customer.findAll()])
	.then( (data) => {
		let [deptData, custData] = data;
		let allDeptInfo = deptData.map( (curr,idx,arr) => curr.get());
		let allCustInfo = custData.map( (curr, idx, arr) => curr.get());
		let defaultDept = allDeptInfo.filter( (ele, idx, arr) => ele.isDefault === true);
		res.render('department', {title: 'Department', customerInfo: allCustInfo ,defaultDept : defaultDept[0], deptsInfo: allDeptInfo});
	});
});



module.exports = router;