const express = require('express');

//create express module
const app = express();

// use will call the function everytime there is a request.  use done() to go to the next endpoint
app.use(function(req, res, done){
	console.log(req.url);
	req.d = new Date();
	done();
});

//sample routes: define an endpoint.
app.get('/', function(req, res){
	res.send('hello world!!!! '.toUpperCase() + req.d);
});


//endpoints with wildcard starting with colon
//getting data from the get request, use req.params.x or y
//request paramater comes in as a string! Use coercion to convert them to numbers
app.get('/numbers/:x/:y', function(req, res){
	let msg;

	//use of template literals. requires backticks not single quotes
	if(req.params.x > req.params.y){
		msg = `${req.params.x*1} is greater`;
	} else {
		msg = `${req.params.y*1} is greater`;
	};
	
	res.send(msg+ " " + req.d);
});

//create a server and listen to a port 3000 for a request
app.listen(3000);