# Starbucks store finder :coffee:

## Install

```
yarn add jzarca01/starbucks-store-finder
```

## Usage

```js
const starbucks = require('starbucks-store-finder')

const opts = { lat: '-23.585324', lng: '-46.286264,9z' }

await starbucks(opts)
// => [list, of, starbucks, stores, ...]
```

## API

### starbucks([options])

Returns a `promise`

#### options

Type: `object`<br/>
Required<br/>

Object must have `lat` and `lng` keys

#### lat

Type: `string`<br/>
Required

Latitude

#### lng

Type: `string`<br/>
Required

Longitude