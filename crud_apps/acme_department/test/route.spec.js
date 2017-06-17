/*jshint node: true */
// 'use strict';

import chai from  'chai';
import Product from '../models/product.model';
import supertest from 'supertest';
import App from '../app';

const expect = chai.expect;
// const app = require('supertest')(require('../app'));
const app = supertest.App;

describe('routes', function (){
	beforeEach(function(){
		console.log(Product);
	});



});
