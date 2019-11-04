# Fiscal ID Generator

Licence: [MIT](https://opensource.org/licenses/MIT)

---

[![npm version](https://badge.fury.io/js/%40superhero%2Ffiscal-id-generator.svg)](https://badge.fury.io/js/%40superhero%2Ffiscal-id-generator)

Tool used to generate a fiscal ID

## Install

`npm install @superhero/fiscal-id-generator`

...or just set the dependency in your `package.json` file:

```json
{
  "dependencies":
  {
    "@superhero/fiscal-id-generator": "*"
  }
}
```

## Example

```js
const
FiscalIdGenerator = require('@superhero/fiscal-id-generator'),
fiscalIdGenerator = new FiscalIdGenerator(),
NIF               = fiscalIdGenerator.generateNIF()
```
