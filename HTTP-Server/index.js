const http = require('http');
const fs= require('fs');

const myServer  =http.createServer((req ,res)=>{
    // console.log('new request ' );
     const entryLog = ` ${Date.now()} : ${req.url}New request Received\n`;
     fs.appendFile("entryLog.txt", entryLog , (err, dat)=>{
            res.end('hwllow buddy ');
     })
    

});
 

const PORT=8000;
myServer.listen(PORT, ()=>{ 
    console.log( `server started at port ${PORT}`)
});