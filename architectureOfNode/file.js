const fs = require('fs');

fs.readFile('./details.txt' , 'utf-8' ,(err, result)=>{
   if(err){
    console.log(err, 'error')
   } else{
    console.log(result)
   }
})