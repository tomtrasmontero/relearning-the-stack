// require express build in router
var router = require('express').Router();

router.get('/', function(req, res, done){
	res.send('you hit the users slash route');
});

//export this module to use by server.js
module.exports = router;