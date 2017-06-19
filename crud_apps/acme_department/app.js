'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const swig = require('swig');
swig.setDefaults({ cache: false });
const app = express();



app.get('/', function(req,res,next){
	res.send('200 OK');
});

module.exports = app;