const express = require('express');
const app = express();
const path = require('path');
const methodOveride = require('method-override');
//require bodyParser to get information sent to the server
const bodyParser = require('body-parser');
const swig = require('swig');
swig.setDefaults({ cache : false });

//use body parser to add products
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOveride('_method'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static( path.join( __dirname, 'node_modules')));

app.get('/', function(req,res,next){
	res.render('index', {title: 'Home'});
});

app.use('/products', require('./products.routes.js'));

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));