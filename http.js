const http = require ('http'); 
// request represents incoming request to access information 
// responding is what we are sending back 
// server will kee
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our page,This is Daphne')
    } 
    if(req.url === '/about'){
        res.end('Welcome to our about,This is Daphne')
    }
    if(req.url === '/history'){
        res.end('Welcome to our history,This is Daphne')
    }
    res.end () 
})

server.listen(5000)


// uses of npm 
// reuse code in other projects
// use code by other developers
// a package is a resuable code


// uninstall on npm eg npm uninstall bootstrap
