'use strict';

const expect = require('chai').expect;
const app = require('supertest')(require('../app'));
const db = require('../db/index').models;
const seed = require('../db/index').seed;

describe('database', () => {
	let foo, bar, buzz;

	beforeEach( (done) => {
		seed()
		.then(  (result) => {
			foo = result[0].get();
			bar = result[1].get();
			buzz = result[2].get();
			done();
		})
		.catch( (err) => done(err) );
	});

	it('exists', (done) => {
		expect(db.Department).to.exist;
		expect(db.Customer).to.exist;
		done();
	});

	describe('Department table', () => {
		it('has a name and isDefault property', () => {
			expect(foo.isDefault).to.equal(true);
			expect(bar.isDefault).to.not.equal(true);
			expect(foo.name).to.equal('foo');
		});

		it('there can only be one default department', (done) => {
			db.Department.getDefault()
			.then( (defaultDepartment) => {
				expect(defaultDepartment.length).to.equal(1);
				done();
			});
		});

		it('can change the default department', (done) => {
			
			db.Department.getDefault()
			.then( (defaultDepartment) => {
				expect(defaultDepartment[0].name).to.equal('foo');
				expect(defaultDepartment[0].isDefault).to.equal(true);				
				//make bar the default dept passing in id.
				return db.Department.updateDefaultDept(2)
				.then( (result) => {			
					expect(result[0].name).to.equal('foo');
					expect(result[0].isDefault).to.equal(false);
					expect(result[1].name).to.equal('bar');
					expect(result[1].isDefault).to.equal(true);
				});
			});
			done();
		});
	});

	describe('Customer table', () => {
		it('default users do not have a department', (done) => {
			db.Customer.create({ name: 'wally'})
			.then( (result) => {
				expect(result.get().departmentId).to.equal(null);
				expect(result.get().name).to.equal('wally');
				done();
			});
		});
		
		it('can turn users into customers by passing user id and assinged the default department', (done) => {
			db.Customer.makeCustomer(1)
			.then( (result) => {
				expect(result.departmentId).to.equal(1);
			});
			done();
		});
	});
});