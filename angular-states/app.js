const express = require('express');
const swig = require('swig');
swig.setDefaults( { cache: false});
const app = express();
const path = require('path');

module.exports = app;

app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'browser')));

//set engine swig which run in the backend
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/', (req,res,next) => {
	res.render('index');
});

//parsing object assuming its json coded data
app.use(require('body-parser').json());

app.use('/api/todos', require('./routes/todos'));