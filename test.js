const path = require('path')
const osHomedir = require('os-homedir')
const homedir = require('./')

describe('path-homedir', () => {
  it('throws with bad path', () => {
    expect(() => homedir(0)).toThrowError(/expecting path to be string/i)
  })

  it('gets homedir', () => {
    expect(homedir()).toEqual(osHomedir())
  })

  it('gets path within homedir', () => {
    expect(homedir('spongebob')).toEqual(osHomedir() + path.sep + 'spongebob')
  })
})
