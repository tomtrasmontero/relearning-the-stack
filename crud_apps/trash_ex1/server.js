//bring in express application
const express = require('express');

// require path to make it easy for url creation
const path = require('path');

//bring in trash model
const Trash = require('./trash.model');

//require method override to turn post into delete
const methodOveride = require('method-override');

//create express app
let app = express();

//if there is _method, change the request to the specified method, this case is delete
app.use(methodOveride('_method'));

//require swig to be used
const swig = require('swig');
swig.setDefaults({ cache: false});



//setup static route to make files available to your app
app.use(express.static( path.join( __dirname, 'node_modules')));


//set up view engine using swig
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


// setting up routes
app.get('/', function(req,res,next){
	//render home page and passing data {title: "title"}
	res.render('home', { title: 'Home'});
});

app.get('/trash', function(req,res,next){
	//render home page and passing data {title: "title"}
	res.render('trash', { title: 'Trash', trash: Trash.getTrash()});
});

app.delete('/trash/:id', function(req,res,next){
	Trash.deleteTrash(req.params.id*1);
	res.redirect('/trash');
});

//open port for app
app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));