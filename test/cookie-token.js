
/**
 * Test dependencies.
 */

const test = require('tape')
const jwt = require('jsonwebtoken')
const cookie = require('..')


test('should serialize a token', assert => {
  assert.plan(2)
  const token = jwt.sign({
    hello: 'world'
  }, 'thisisasecret')
  const serialized = cookie.serialize(token)
  const content = serialized.split(';')[0].split('access_token=')[1]
  assert.equal(serialized, `access_token=${content}; HttpOnly; Secure`)
  // token add a iat field
  assert.deepEqual(jwt.decode(content, 'thisisasecret').hello, 'world')
})


test('should parse a cookie', assert => {
  assert.plan(1)
  // serialized version of a {hello: 'world'} payload
  const serialized = 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6IndvcmxkIiwiaWF0IjoxNTExMjk5NjI4fQ.uIMfmX1WSAOMqiuGbfydLk3e4U0vmCtaiSbVaQVs1nU; HttpOnly; Secure'
  cookie.parse(serialized, 'access_token', 'thisisasecret')
    .then(payload => {
      assert.equal(payload.hello, 'world')
    })
})
