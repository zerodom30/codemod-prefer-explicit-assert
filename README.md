# codemod-prefer-explicit-assert

This repository contains a codemod for react-testing-library using jsCodeshift. The `codemod-prefer-explicit-assert` addresses the `eslint-plugin-testing-library` rule [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md)

## Installation:

```
git clone https://github.com/zerodom30/codemod-prefer-explicit-assert.git

cd  codemod-prefer-explicit-assert/

yarn install or npm install
```

## Usage:

``` 

yarn transform path/to/files

```

### Note:
While this codemod is meant to run against `testing-library/react` it can be used with `testing-library/dom` however it is not well tested in that scenario.

This library is a fork off of [eslint-jest-testing-library-codemod](https://github.com/atsikov/eslint-jest-testing-library-codemod), so `codemod-prefer-explicit-assert` could also be run as a `fixer` with that repo.