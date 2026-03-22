const { error } = require('console');
const fs= require('fs') ;

// synchronous 
fs.writeFileSync('./text.text', "This is a text file ");

// Asynchronous
fs.writeFile('./text.text', "This is a  asynchronous file ", (err)=>{}) ;


const result = fs. readFileSync('./contact.txt' , 'utf-8') ;
console.log(result);

 fs.readFile('./contact.txt', 'utf-8' , (err , result2)=>{
  if(err){
    console.log(error,err)
  }else{
    console.log(result2)
  }
});