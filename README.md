# Cookie-Token

[![Build Status](https://travis-ci.org/bredele/cookie-token.svg?branch=master)](https://travis-ci.org/bredele/cookie-token)
[![NPM](https://img.shields.io/npm/v/cookie-token.svg?style=flat-square)](https://www.npmjs.com/package/cookie-token)
[![Downloads](https://img.shields.io/npm/dm/cookie-token.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cookie-token)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Create and serialize a cookie from a JWT token:
  - **secure**: the cookie is inaccessible from the client side to prevent cross-site scripting and can only be sent over HTTPS
  - **memory efficient**: cookie is decoded instead of being saved into memory


## Usage

Here's an example to create a cookie from an authorization bearer containing a JWT token.

```js
const http = require('http')
const cookie = require('cookie-token')


http.createServer((req, res) => {

  // parse cookie
  cookie.parse(req.headers.cookie).then(payload => {
    // do something
  })

  // create cookie
  const token = req.headers.authorization.split(' ')[1]
  res.setHeader('Set-Cookie', cookie.serialize(token))
  res.end()
})
```

Default configuration can be overridden by passing [cookie options](https://github.com/jshttp/cookie) as a third argument. MaxAge is not created from the token to allow more control over the cookie expiration date.

## Installation

```shell
npm install cookie-token --save
```

[![NPM](https://nodei.co/npm/cookie-token.png)](https://nodei.co/npm/cookie-token/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Cookie-token is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any cookie-token related project, component or other let everyone know in our wiki.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
