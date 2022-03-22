// event loop is what allows node js to performing non-blocking operations 
// event loop avoids the synchrous by registering the call back so that the users dont have to wait
 
// js is synchrous and single threaded means js reads everything line by line. It happens at the same time 

// event loop examples
const { readFile } = require ('fs')
console.log('started a first task');

// check file path 
// readFile is synchrous 
// readFile ('./content/first.txt', 'utf8' (err,result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
//     console.log('completed first task')
// })
// console.log('starting new task');

// started operating system process (synchrous). we can exit the function 
console.log('first');
setTimeout(() => {
    console.log('second');
},0)
console.log('third');

//  asynchrous process will stay alive alive unless we process ctrl +c. doesnt happen at the same time 
// unexpected error
// we cant exit it


setInterval(() => {
    console.log('Hello world');
},2000) // it will run every 2 seconds for Set Interval

// // this is asynchrous so it will run first
console.log('I will run first');




