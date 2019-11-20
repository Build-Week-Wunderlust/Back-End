const request = require('supertest');

const server = require('./server');

describe('server', () => {
    describe('GET /', () => {
        it('Should return 200 OK', () => {
            return request(server)
              .get('/')
              .then(res => {
                expect(res.status).toBe(200);
            });
        });

    it('Should return JSON formatted response', () => {
        return request(server)
            .get('/')
            .then(res => {
            expect(res.type).toMatch(/json/i);
      });
    });
  });
});