const http = require('http');

const myServer  =http.createServer((req ,res)=>{
    console.log('new request ' );
    res.end('hwllow buddy ');
});
 

const PORT=8000;
myServer.listen(PORT, ()=>{ console.log( `server started at port ${PORT}`)});