const http = require('http')

const server = http.createServer ((req,res) => {
    if(req.url === '/') {
        res.end ('Home page')
    }
   //  if (req.url === 'about') {
   //      // blocking code 
   //      for(let i = 0; i < 10000; i++){
   //          for(let j =0; j < 1000; j++){
   //              console.log(`${i} ${j}`);
   //          }
   //      }
//         res.end ('About page')
//     }
//     res.end ('Error page')
// })

// server.listen(5000, ()=> {
//     console.log('You are listening to port 5000');
// })
    