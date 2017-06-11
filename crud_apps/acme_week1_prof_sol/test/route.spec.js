const expect = require('chai').expect;
const Product = require('../product.model');
const app = require('supertest')(require('../app'));


describe('routes', function(){
	beforeEach(function(){
		Product.reset();
	});

	describe('Get /', function(){
		//done for async.
		it('has the text welcome', function(done){
			app.get('/')
				//expect to get an OK response
				.expect(200)
				//test the response that we received
				.end(function(err, res){
					expect(res.text).to.contain('Welcome');
					done();
			});
		});
	});

	describe('GET /products', function(){
		it('shows products', function(done){
			app.get('/products')
				.end(function(err, res){
					expect(res.text).to.contain('Foo');
					expect(res.text).to.contain('Bar');
					expect(res.text).to.contain('Baz');										
					done();
			});
		});
	});

	describe('GET /products/add', function(){
		it('shows add form', function(done){
			app.get('/products/add')
				.end(function(err, res){
					expect(res.text).to.contain('Create Product');										
					done();
			});
		});
	});	

	describe('GET /products/2/edit', function(){
		it('shows edit form', function(done){
			app.get('/products/2/edit')
				.end(function(err, res){
					expect(res.text).to.contain('Edit Product');										
					done();
			});
		});
	});		

	describe('DELETE /products/2', function(){
		it('deletes product', function(done){
			app.delete('/products/2')
				.end(function(err, res){
					expect(Product.list().length).to.equal(2);									
					done();
			});
		});
	});	

	describe('POST /products', function(){
		it('insert a product', function(done){
			app.post('/products')
			//supertest will send data to the routes as urlencoded string
				.send('name=Quq')
				.end(function(err, res){
					expect(Product.findOne(5).name).to.equal('Quq');										
					done();
			});
		});
	});	

	describe('PUT /products', function(){
		it('update a product', function(done){
			app.put('/products/2')
			//supertest will send data to the routes as urlencoded string
				.send('name=BAR')
				.end(function(err, res){
					expect(Product.findOne(2).name).to.equal('BAR');										
					done();
			});
		});
	});			

});