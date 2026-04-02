const  express = require("express");
const app = express ();
const PORT = 3000;
const users = require('./MOCK_DATA (2).json');

const fs = require("fs");

// middleare
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('hellow from my middleware 1 ') 
    fs.appendFile("log.txt",`${Date.now()} :${req.method}:${req.path}\n`,(err,data)=>{
            next()  ;
    })
    
})

app.use((req, res, next) => {
    console.log('hellow from my middleware 2 ', req.myUsername)
    next()
})


app.get('/api/users',(req,res)=>{
    res.setHeader('x-myHeader', "akash")  // create my own header
    return res .json(users)
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    console.log(body)
    users.push({ id: users.length + 1, ...body });
    fs.writeFile('./MOCK_DATA (2).json', JSON.stringify(users), (err, data) => {
        return res.json({ status: 'succes', id: users.length + 1 })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})