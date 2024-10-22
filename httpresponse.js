const http=require("node:http");

const server  = http.createServer((req,res) => {
    res.writeHead(200,{"content-type" : "text/plain"});
    res.end("hello world!");
});
server.listen(3000 ,() =>{
    console.log("server running on port 3000");
})