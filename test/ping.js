const expect = require('chai').expect
const request = require('supertest')

const app = require('../app')

describe('GET /ping', () => {
  it('Testing server is up', (done) => {
    request(app).get('/ping')
      .then((res) => {
        expect(res.body.message).to.equal('pong')
//        expect(res.status).to.equal(200)
        done()
      })
      .catch((err) => done(err))
  })
})

