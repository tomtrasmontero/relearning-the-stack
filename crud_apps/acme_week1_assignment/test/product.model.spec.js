const expect = require('chai').expect;
const Product = require('../product.model');

describe('Product model', function(){
	beforeEach(function(){
		Product.resetSeed();
	});

	it('exists', function(){
		expect(Product).to.be.ok; 
	})

	describe('Product methods', function(){
		it('#getProducts returns the products', function(){
			expect(Product.getProducts).to.be.ok;
			expect(Product.getProducts().length).to.equal(2);
		});

		it('#add function adds additional product to the list',function(){
			let productItem = {product: "Guac"};

			Product.add(productItem);

			expect(Product.add).to.be.ok;
			expect(Product.getProducts()[2].name).to.equal('Guac');
			expect(Product.getProducts().length).to.equal(3);
		});

		it('#delete destroys the specific product', function(){
			Product.delete(2);
			
			expect(Product.delete).to.be.a('function');
			expect(Product.getProducts()).to.have.lengthOf(1);
			expect(Product.getProducts()[0].name).to.equal('Shoe');
		});

		it('#getProduct returns a single product', function(){
			expect(Product.getProduct(2)).to.be.a('array');
			expect(Product.getProduct(1)).to.have.lengthOf(1);
			expect(Product.getProduct(2)[0].name).to.equal('Shower Head');
		});

		it('#editProduct allows you to edit the name of a product', function(){
			let newName = { itemName: 'Jordans XXII'};

			Product.editProduct(newName,1);

			expect(Product.getProduct(1)).to.have.lengthOf(1);
			expect(Product.getProduct(1)).to.be.a('array');
			expect(Product.getProduct(1)[0].name).to.equal('Jordans XXII');
		});
	});
});