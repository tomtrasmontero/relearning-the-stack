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
				expect(res.text).to.contain('Home');
				expect(200,'ok');
				done();
			});
		});
	});

	describe('GET /products/add', function(){
		it('takes you to a new page', function(done){
			app.get('/products/add')
			.expect(200)
			.end(function(err, res){
				expect(res.text).to.contain('add');
				done();
			})
		})
	});

	describe('GET products/add/item', function (){
		it('adds new item into the list using form', function(done){
			app.post('/products/add/item')
			.send("product=Gear")
			.end(function(err, res){
				expect(Product.getProduct(3)[0].name).to.equal('Gear');
				done();
			});
		});
	});

	describe('DELETE /delete/2', function(){
		it('deletes a product', function(done){
			app.delete('/products/delete/2')
			.end(function(err, res){
				expect(Product.getProducts()).to.have.length(1);
				done();
			})
		})
	});

	describe('GET /update/:id/:name', function(){
		it('takes you to a edit page', function(done){
			app.get('/update/3/Bar')
			.expect(200)
			.end(function(err, res){
				expect(res.text).to.contain('Bar');
				done();
			})
		})
	});

	describe('PUT products/edit/:itemId', function (){
		it('edits item', function(done){
			app.put('/products/edit/1')
			.send("itemName=Jordan")
			.end(function(err, res){
				expect(302);
				expect(res.text).to.contain('/products');
				expect(Product.getProduct(1)[0].name).to.equal('Jordan');
				done();
			});
		});
	});	

});