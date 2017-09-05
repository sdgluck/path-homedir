const _path = require('path')
const homedir = require('os-homedir')

module.exports = function pathHomedir (path) {
  path = typeof path === 'undefined' ? '' : path

  if (typeof path !== 'string') {
    throw new Error('Expecting path to be string, got "' + typeof path + '".')
  }

  return _path.resolve(homedir(), path)
}
