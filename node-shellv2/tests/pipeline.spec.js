//Bring Chai expect function
const expect = require('chai').expect
const pipeline = require('../pipeline');
const cat = require('../commands').cat;
const wc = require('../commands').wc;

let numberData = [];
let i= 1;
while(numberData.length < 20){
	numberData.push(i++);
}

describe('pipeline', function(){
	it('exists', function(){
		expect(pipeline).to.be.ok;
	});

	describe('using the cat command', function(){
		describe(' reading numbers-a.txt twice', function(){
			let result;

			//done will run the test after all code is processed- 
			//async function will need to be finished then test will run
			beforeEach(function(done){
				//pipeline will run functions in the array
				pipeline([{ fn: cat, args: 'numbers-a.txt numbers-a.txt'}], function(err, _result){
					result = _result;
					done();
				});
			});

			it('returns the contents of the file', function(){
				expect(result).to.equal(numberData.concat(numberData).join('\n'));
			});

		});
	});

	describe('using the cat command with wc', function(){
		describe(' reading numbers-a.txt twice', function(){
			let result;

			beforeEach(function(done){
				//pipeline will run functions in the array to also include wc
				pipeline([{ fn: cat, args: 'numbers-a.txt numbers-a.txt'}, { fn: wc}], function(err, _result){
					result = _result;
					done();
				});
			});

			it('returns the word count', function(){
				expect(result).to.equal(40);
			});

		});
	});

});