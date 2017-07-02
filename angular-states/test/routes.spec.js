const expect = require('chai').expect;
const db = require('../db');
//used to chain responses
const client = require('supertest-as-promised')(require('../app'));

describe('routes', () => {
//before will only run once
	before( (done) => {
		db.sync()
		.then( () => done() )
		.catch(done);
	});

	//delete each time test
	beforeEach( done => {
		db.truncate()
		.then( () => done())
		.catch(done);
	});

	describe('POST', () => {
		it('creates a todo', (done) => {
			
			client.post('/api/todos')
			.send({ name: 'foo' })
			.then( result => {
				expect(result.status).to.equal(200);
				return client.get('/api/todos');
			})
			.then( result => {
				expect(result.status).to.equal(200);
				expect(result.body.length).to.equal(1);
				done();
			});
		});
	});

	describe('todos', () => {
		describe('DELETE', () => {
			it('deletes a todo', (done) => {
				client.post('/api/todos')
				.send({ name: 'foo' })
				.then( result => {
					expect(result.status).to.equal(200);
					expect(result.body.name).to.equal('foo');
					return client.delete(`/api/todos/${result.body.id}`);
				})
				.then( result => {
					expect( result.status ).to.equal(200);
					done();
				});
			});
		});

		describe('POST', () => {
			it('creates a todo', (done) => {
				
				client.post('/api/todos')
				.send({ name: 'foo' })
				.then( result => {
					expect(result.status).to.equal(200);
					return client.get('/api/todos');
				})
				.then( result => {
					expect(result.status).to.equal(200);
					expect(result.body.length).to.equal(1);
					done();
				});
			});
		});
	});

});