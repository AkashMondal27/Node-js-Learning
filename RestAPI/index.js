const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const users = require('./MOCK_DATA.json');

// create a middleware to parse json data (to push) from the request body
app.use(express.urlencoded({extended: true}));  // to parse url encoded data

//1st rote to get all users

app.get('/users',(req,res)=>{   // return html page with all users
     const html = `
     <ul>
     ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
     </ul>
     `
      res.send(html);
})

//REST API route to get all users in json format
app.get('/api/users',(req,res)=>{   
        return res.json(users);
})

app.route('/api/users/:id').get((req,res)=>{
 const userId= Number(req.params.id);
    const user= users.find((user) => user.id === userId) ;
    if(user){
        return res.json(user);
    }else{
        return res.status(404).json({message: 'User not found'});
    }
})
.put((req,res)=>{
    return res.json({message: 'User updated successfully'});
})
.delete((req,res)=>{
    return res.json({message: 'User deleted successfully'});
})
.patch((req,res)=>{
    return res.json({message: 'User updated successfully'});
});


// example of post request to add new user in json file

app.post('/api/users',(req,res)=>{
    const body = req.body;  //  sote  the data got from  frontend in body variable
    console.log("body :",body)
    users.push({...body ,id:users.length+1});  // push the data in users array
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
       return res.json({status : "sucess", id: users.length + 1});  // send response to frontend
    })
})

 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});