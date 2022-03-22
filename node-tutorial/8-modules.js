
// modules 
// NODE uses commom js
// every file is a module(by default)

// always start with './' to give the path 
// this function helps us import names from name.js file
const names = require ('./3-names'); 
console.log(names)
const sayHi = require ('./2-utils');
const data = require('./6-alternate-flavors')

// the code can run even when it is not assigned to the variable. 
require('./7-mind-grenade');

// we are setting the name to the what was exported
//sayHi('Suzan');
//sayHi(names.john);
//sayHi(names.peter);

