// npm - global command, comes with node

// local dependecy - use it only in this partical object 
// npm i <packageName>

// global dependency - use it any project
// npm install -g <packageName>

// package json -stores important info about the package 
// npm init -y (install everything by default) 

const _ = require ('lodash')

const items = [1, [2 [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello daphne');