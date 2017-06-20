'use strict';

const expect = require('chai').expect;
const app = require('supertest')(require('../app'));

describe('routes', () => {
	beforeEach(function(){
		console.log('beforeEach is good');
	});

	describe('GET /', () => {
		it('returns ok', function (done){
			app.get('/')
			.expect(200)
			.end((err, res) => {
				expect(res.text).to.contain('OK');
				expect(200, 'ok');
				done();
			});
		});
	});

  it('404 everything else',(done) => {
    app.get('/foo/bar')
       .expect(404, done);
  });	
});
