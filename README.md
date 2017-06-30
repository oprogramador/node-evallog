# node-evallog

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/node-evallog.svg?branch=master)](https://travis-ci.org/oprogramador/node-evallog
)

[![NPM status](https://nodei.co/npm/evallog.png?downloads=true&stars=true)](https://npmjs.org/package/evallog
)

## How to install?
```npm install -g evallog```

## usage
This library evaluates passed arguments and logs them.

### using default logger (console.log)
```
const x = {
 aVeryLongPropertyName: true,
 anotherVeryLongPropertyName: false,
};

require('evallog').default('x.aVeryLongPropertyName', 'x.anotherVeryLongPropertyName', 'x.aVeryLongPropertyName && x.anotherVeryLongPropertyName');
```
Output:
```
{ 'x.aVeryLongPropertyName': true,
  'x.anotherVeryLongPropertyName': false,
  'x.aVeryLongPropertyName && x.anotherVeryLongPropertyName': false }
```


### using custom logger
```
const x = {
 aVeryLongPropertyName: true,
 anotherVeryLongPropertyName: false,
};

function myLogger() {
}

require('evallog').default(myLogger, 'x.aVeryLongPropertyName', 'x.anotherVeryLongPropertyName', 'x.aVeryLongPropertyName && x.anotherVeryLongPropertyName');
```
