const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("<h1><b>hello</b></h1>");
    res.end();
})
server.listen(3000,()=>{
    console.log("server listening on http://localhost:3000");
})
