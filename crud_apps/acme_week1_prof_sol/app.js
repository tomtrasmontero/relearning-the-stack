const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const swig = require('swig');
swig.setDefaults({ cache: false});


app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

app.get('/', function(req, res, next){
	res.render('index', { title: 'Welcome' });
});

app.use('/products', require('./routes/products'));

module.exports = app;