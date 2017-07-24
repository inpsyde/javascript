# eslint-config-inpsyde

[![Version](https://img.shields.io/npm/v/eslint-config-inpsyde.svg)](https://www.npmjs.com/package/eslint-config-inpsyde)
[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://www.npmjs.com/package/eslint-config-inpsyde)
[![Build](https://img.shields.io/travis/inpsyde/javascript.svg)](http://travis-ci.org/inpsyde/javascript)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-inpsyde.svg)](https://www.npmjs.com/package/eslint-config-inpsyde)
[![License](https://img.shields.io/npm/l/eslint-config-inpsyde.svg)](https://www.npmjs.com/package/eslint-config-inpsyde)

> Shareable ESLint config, following the Inpsyde JavaScript Style Guide.

## Installation

Install via [Yarn](https://yarnpkg.com):

```sh
yarn add --dev eslint-config-inpsyde eslint
```

Install via npm:

```sh
npm install --save-dev eslint-config-inpsyde eslint
```

## Usage

This package exports two shareable [ESLint configs](http://eslint.org/docs/user-guide/configuring).
Both packages only require [`eslint`](https://www.npmjs.com/package/eslint).

### eslint-config-inpsyde

The default config is intended to be used for linting _modern_ JavaScript code.
Currently, this means that the rules are specifically designed for ES6 code, while the config also allows to parse ES7.

[Install the package](#installation), then add `"extends": "inpsyde"` to your `.eslintrc` file.

### eslint-config-inpsyde/es5

If you want to lint ES5 code, then this config is for you.

[Install the package](#installation), then add `"extends": "inpsyde/es5"` to your `.eslintrc` file.

## Further Information

For much more detailed information on how to use ESLint (for your WordPress projects), please refer to [this post](https://tfrommen.de/using-eslint-for-wordpress-projects/).

## License

Copyright (c) 2017 Inpsyde GmbH

This code is licensed under the [MIT License](LICENSE).
