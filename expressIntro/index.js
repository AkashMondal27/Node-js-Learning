
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/',(req, res)=>{
    return res.send('Hello from home page ');
});

app.get('/about',(req, res )=>{
    return res.send('Hello from about page');    
})

app.get('/contact',(req, res )=>{
    return res.send(`Hello from contact page \n hey from ${req.query.name || 'unknown'}`);   
}
);


app.listen(PORT, ()=>{
    console.log(`server is live at port ${PORT}`)
})