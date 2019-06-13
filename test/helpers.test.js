import '@babel/polyfill'
const should = require('chai').should()
const nock = require('nock')

import {isExistingUser} from '../src/helpers/githubRequest'

describe('githubRequest-test', function() {
  describe('isExistingUser-test', function() {
    it('should be existed about the user', function(done) {
      const user = 'testUser'
      const url = `https://api.github.com`
      const path = `/users/${user}`
      nock(url)
        .get(path)
        .reply(200, {
          login: 'testUser',
        })

      isExistingUser(user).then(isExisted => {
        isExisted.should.be.true
      })

      done()
    })

    it('should NOT be existed about the user', function(done) {
      const user = 'testUser'
      const url = `https://api.github.com`
      const path = `/users/${user}`
      nock(url)
        .get(path)
        .reply(404)

      isExistingUser(user).then(isExisted => {
        isExisted.should.be.false
      })

      done()
    })
  })
})
