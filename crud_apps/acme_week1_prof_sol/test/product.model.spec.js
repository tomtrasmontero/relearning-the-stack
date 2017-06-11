const expect = require('chai').expect;
const Product = require('../product.model');

describe('Product model', function(){
	//Run this before each test
	beforeEach(function(){
		Product.reset();
	});

	it('exists', function(){
		expect(Product).to.be.ok;
	});

	describe('#list', function(){
		it('returns three products', function(){
			expect(Product.list().length).to.equal(3);
		});
	});

	describe('#destroy', function(){
		it('deletes a product', function(){
			Product.destroy(2);
			expect(Product.list().length).to.equal(2);
		});
	});	

	describe('#update', function(){
		it('updates a product', function(){
			let product = Product.findOne(2);
			expect(product.name).to.equal('Bar');

			Product.update(2, {name: 'BAR'});
			product = Product.findOne(2);
			expect(product.name).to.equal('BAR');
		});
	});

	describe('#create', function(){
		it('create a product', function(){
			Product.create({name: 'quq'});
			expect(Product.list()[3].name).to.equal('quq');
			expect(Product.list()[3].id).to.equal(5);
		});
	});			
});