const express = require('express');
const app = express();
const PORT = 3000;

const users = require('./MOCK_DATA.json');

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



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});