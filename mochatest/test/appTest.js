//Write test to run the function and check results

//bring in assertion library from chai
const assert = require('chai').assert;
const app = require('../app');


describe('App', function(){
	describe('sayHello function', function(){
		//to test the value use 'it' function. it(description of test, function)
		let sayHelloResult = app.sayHello();

		it('sayHello should return hello', function (){
			
			// try and save variable to the result you are trying to test
			let result = app.sayHello();
			//(run the function app(), result will equal 'hello')
			assert.equal(result, 'hello');
		});

		it('sayHello should return type string', function(){
			let result = app.sayHello();
			assert.typeOf(result, 'string');
		});		
	});

	describe('addNumbers function', function(){
		let addNumbersResult = app.addNumbers(5,5);

		it('addNumbers should be above 5', function(){
			let result = addNumbersResult;
			assert.isAbove(result, 5);
		});

		it('addNumbers should return a number', function(){
			let result = addNumbersResult;
			assert.typeOf(result, 'number');
		});
	});

});