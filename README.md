# path-homedir

> Get a path in the user home directory

Unlike the [`resolve-*`](https://github.com/sindresorhus/resolve-cwd) these modules allow resolution of non-module paths. 

## Install

```sh
npm install --save path-homedir
```

```sh
yarn add path-homedir
```

## Import

```js
// ES2015
import homedir from 'path-homedir'
```

```js
// CommonJS
var homedir = require('path-homedir')
```

## Usage

### `homedir([path]) : String`

Resolve a path from within the user's home directory.

- __path__ {String} (required) path to resolve in the home directory

Returns a string.

## Example

```js
import homedir from 'path-homedir'

homedir('pineapple') //=> C:/User/Spongebob Squarepants/pineapple
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](https://github.com/sdgluck)
