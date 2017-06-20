'use strict';

const expect = require('chai').expect;
const app = require('supertest')(require('../app'));
const db = require('../db/index').models;

describe('database', () => {
	it('exists', (done) => {
		expect(db.Department).to.exist;
		expect(db.Customer).to.exist;
		done();
	});

	describe('Department table', () => {
		it('has a isDefault property', (done) => {
			expect
		});
	});

});