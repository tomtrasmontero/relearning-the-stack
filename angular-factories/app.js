const express = require('express');
const app = express();
const path = require('path');

module.exports = app;

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(require('body-parser').json());

app.get('/', (req,res,next) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api/todos', require('./routes/todos'));