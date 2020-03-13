const expect = require('chai').expect;
const request = require('request');

// tests for the version endpoint
describe('Status and content', function () {
    describe('Status and Content of /version endpoint', function () {
        it('status code is 200', function (done) {
            request('http://localhost:8080/version', function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('show correct version', function (done) {
            request('http://localhost:8080/version', function (error, response, body) {
                expect(body).to.equal(JSON.stringify({ "version": "1.0.0" }));
                done();
            });
        });
    });
});