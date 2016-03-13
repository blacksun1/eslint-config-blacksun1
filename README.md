# eslint-config-blacksun1

![build status](https://travis-ci.org/blacksun1/eslint-config-blacksun1.svg)

blacksun1 shareable eslint configuration

## How to use

First add the module to your package.json and install it.

```bash
npm install eslint-config-blacksun1 --save-dev
```

then setup your `.eslintrc` file so that eslint knows to use them. Here is an example script.

```js
{
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": "blacksun1"
}
```

You can always override rules by adding a rule override such as the following:

```js
{
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      4
    ]
  },
  "extends": "blacksun1"
}
```

which overrides the 2 character spacing with 4 character spacing.
