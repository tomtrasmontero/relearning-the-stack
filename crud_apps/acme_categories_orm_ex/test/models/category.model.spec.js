const expect = require('chai').expect;
const db = require('../../db.js');
const Category = db.models.Category;

describe('Category', function(){
	beforeEach(function(done){
		db.seed()
			.then(() => done())
			.catch( (err) => done(err))
	
	});

	it('exists', () => expect(Category).to.be.ok);
});