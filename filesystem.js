const fs=require("fs"); //fs module for work with file
//how to read file
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//    // console.log(data);//return buffer
//    console.log(data.toString());
// })
// console.log("working on blog1 file");
// //write file
// fs.writeFile("./docs/blog2.txt","this is new blog2",()=>{
//     console.log("new file is created");
// })

//directories

// if(!fs.existsSync("./myfolder")) //not exist
// {
//    fs.mkdir('./myfolder',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("folder created");
//    })
// }
// else{
//     fs.rmdir('./myfolder',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("folder removed");
//     })
// }
//deleting file
if(fs.existsSync("./docs/blog2.txt")) //if exist only then
{
    fs.unlink('./docs/blog2.txt',(err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log("file is deleted");
    })
}
else{
    fs.writeFile("./docs/newfile.txt","this is a new file",(err)=>{
        if(err)
        {
            console.log(err);
        }
        console.log("file is created as newfile");
    })
}