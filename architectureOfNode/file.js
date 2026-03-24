const fs = require('fs');
const os= require ('os');

console.log(os.cpus().length);
// non blocking request .... async
console.log("akkk")
fs.readFile('./details.txt' , 'utf-8' ,(err, result)=>{
   if(err){
    console.log(err, 'error')
   } else{
    console.log(result)
   }
})
console.log("moooo")

//Bloking request ....sync

console.log('1 akash')
 const rerult =fs.readFileSync('./details.txt', "utf-8");
 console.log(rerult);
 console.log('2')



 /* 
📌 Node.js Blocking vs Non-Blocking (Sync vs Async)

1. Non-Blocking (Asynchronous) - fs.readFile()
   - Executes in background (does NOT stop program)
   - Callback runs when file reading is complete
   - Faster for multiple tasks (uses event loop)
   - Output order may differ

   Example flow:
   console.log("akkk")
   fs.readFile(...)  // goes to background
   console.log("moooo")
   // file result prints later

2. Blocking (Synchronous) - fs.readFileSync()
   - Stops execution until file is read
   - Code runs line-by-line
   - Slower but simple

   Example flow:
   console.log("1 akash")
   fs.readFileSync(...) // waits here
   console.log("2")

3. Key Difference:
   - Async → Non-blocking, better performance
   - Sync → Blocking, easier but slower

4. Extra:
   os.cpus().length → returns number of CPU cores
*/