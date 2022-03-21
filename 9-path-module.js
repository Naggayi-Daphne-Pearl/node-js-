//// path module 
const path = require('path');
// returns path separator 
console.log(path.sep);

// Join all arguments together and normalize the resulting path.
const filePath = path.join('/content', '/subfolder', '/test.txt'); 
console.log(filePath);

// provided basename
const base = path.basename(filePath)
console.log(base);

//path of the directory 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);