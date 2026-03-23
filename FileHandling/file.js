const { error } = require('console');
const fs= require('fs') ;

// synchronous   ..Blocking request 
fs.writeFileSync('./text.text', "This is a text file ");

// Asynchronous   ..... Non Blocking request 
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


fs.appendFileSync('./store.txt' , `Hey , it is a example of append \n`);


/*  NOTE : -

File handling in Node.js is the process of creating, reading, writing, 
updating, and deleting files using the built-in fs (File System) module.
It allows applications to store and manage data on the system.

📌 Key Points:
 
1. Use require('fs') to access file system
2. Supports synchronous (blocking) and asynchronous (non-blocking) operations
 
3. Common methods:
 
    writeFile() → create/write file
    readFile() → read file
    appendFile() → add data
    unlink() → delete file 
 */