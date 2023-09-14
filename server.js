
const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.method,req.url);
    // //sending plain text
    // // res.setHeader('Content-Type','text/plain');
    // // res.write("hello suva");

    // //seding html text
    // res.setHeader("Content-Type",'text/html');
    // res.write('<p>welcome to nodejs </p>');
    // //ending the request
    // res.end();
})
server.listen(3000,"localhost",()=>{
    console.log("listening to port 3000");
})