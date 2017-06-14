const expect = require('chai').expect;
const db = require('../../db.js');
const Category = db.models.Category;
const Product = db.models.Product;


describe('Category & Product', function(){
	beforeEach(function(done){
		let foo, bar;
		db.seed()
		.then((result) => {
			//.get() will return the item that is in the database;
			// console.log(result[0].get());
			foo = result[0];
			bar = result[1];
			done()
		})
		.catch( (err) => done(err))
	
	});

	it('exists', () => {
		expect(Category).to.be.ok;
		expect(Product).to.be.ok;
	});

	describe('#findByName', function(){
		it('there is one category named foo', function(done){
			
			console.log('++++++++++',Category);
			Category.findByName('foo')
			.then( (categories) => {
				expect(categories.length).to.equal(1);
				expect(categories[0].name).to.equal('foo');
				done();
			})
			.catch( (err) => done(err))
		});
	});


	describe('#findAll', function(){
		it('there are two categories', function(done){
			Category.findAll()
			.then( (categories) => {
				expect(categories.length).to.equal(2);
				done()
			})
			.catch( (err) => done(err))	
		});
	});

});