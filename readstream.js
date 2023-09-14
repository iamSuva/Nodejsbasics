const fs=require("fs");
const readstream=fs.createReadStream('./docs/blog1.txt',{encoding:'utf-8'});
const writestream=fs.createWriteStream('./docs/writestreams.txt');
// readstream.on('data',(chunk)=>{
//     console.log("new chunk");
//     // console.log(chunk.toString());
//     console.log(chunk);
//     writestream.write(chunk);
// })

//instead of function calling we can use pipe
readstream.pipe(writestream);