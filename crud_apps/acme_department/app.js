'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const swig = require('swig');
swig.setDefaults({ cache: false });
const app = express();

//set up view engine
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

app.use(express.static ( path.join( __dirname, 'node_modules')));

app.get('/', function(req,res,next){
	res.render('home', {title : 'HOME'});
});

app.use('/department', require('./routes/department'));
app.use('/customers', require('./routes/customers'));

module.exports = app;