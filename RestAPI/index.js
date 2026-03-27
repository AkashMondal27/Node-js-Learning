const express = require('express');
const app = express();
const PORT = 3000;

const users = require('./MOCK_DATA.json');

//1st rote to get all users
app.get('/users',(req,res)=>{
        return res.json(users);
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})