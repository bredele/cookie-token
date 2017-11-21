/**
 * Dependencies
 */

const jwt = require('jsonwebtoken')
const cookie = require('cookie')


/**
 * Expose cookie-token.
 */

module.exports = {

  /**
   * Create and serialize a cookie session from a JWT token.
   *
   * @param {String} token
   * @param {Object?} options
   * @api public
   */

  serialize(token, options = {}) {
    return cookie.serialize(options.name || 'access_token', token, {
      httpOnly: true,
      secure: true,
      ...options
    })
  },


  /**
   * Create and serialize a cookie session from a JWT token.
   *
   * @param {Object} cookie header
   * @param {String} name
   * @param {String?} secret
   * return {Promise}
   * @api public
   */


  parse(header, name, secret = process.env.JWT_SECRET) {
    const cookies = cookie.parse(header)
    return new Promise((resolve, reject) => {
      jwt.verify(cookies[name || 'access_token'], secret, (err, decoded) => {
        if (err) reject(err)
        else resolve(decoded)
      })
    })
  }
}
