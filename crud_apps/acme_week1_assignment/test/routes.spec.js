const expect = require('chai').expect;
const Product = require('../product.model');
const app = require('supertest')(require('../app'));

describe('routes', function(){
	beforeEach(function(){
		Product.resetSeed();
	});

	describe('GET /', function(){
		it('has a products title', function(done){
			app.get('/')
			.expect(200)
			.end(function(err,res){
				expect(res.text).to.contain('products');
				expect(200,'ok');
				done();
			})
		})
	});

	describe('GET /add', function(){
		it('takes you to a new page', function(done){
			app.get('/add')
			.expect(200)
			.end(function(err, res){
				expect(res.text).to.contain('add');
				done();
			})
		})
	});
})