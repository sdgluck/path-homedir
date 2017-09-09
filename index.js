'use strict'

var resolve = require('path').resolve
var homedir = require('os-homedir')

module.exports = function pathHomedir (path) {
  path = typeof path === 'undefined' ? '' : path

  if (typeof path !== 'string') {
    throw new Error('Expecting path to be string, got "' + typeof path + '".')
  }

  return resolve(homedir(), path)
}
