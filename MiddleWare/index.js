const express = require('express');
const app = express();
const PORT = 3000;
const users = require('./MOCK_DATA (1).json');

const fs= require("fs");

  

// middleare
app.use(express.urlencoded({extended:false})); 

// make a middleware using app.use() to log the request method and url
app.use((req,res,next)=>{
  console.log('hellow from my middleware 1 ')  // stop the request and response cycle 
  req.myUsername="mondalAkash"
   next()  // to pass the control to the next middleware or route handler
})

app.use((req,res,next)=>{   
    console.log('hellow from my middleware 2 ' , req.myUsername)  
        next() 
})


app.get('/api/users',(req,res)=>{
    return res .json(users)
})

//create a post request to add new user in json file
app.post('/api/users',(req,res)=>{
 const body=req.body ;
 console.log(body)
 users.push({id:users.length+1 , ...body});
 fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users),(err ,data)=>{
    return res.json({status:'succes'  , id: users.length +1})
 })

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})