const http =require("node:http");

const fs=require("node:fs");

const server= http.createServer((req,res)=>{
if(req.url === "/")
{
    res.writeHead(200 , {"content-type" : "text/plain"});
    res.end("home page");
}
else if(req.url === "/about")
{
    res.writeHead(200 , {"content-type":"text/plain"});
    res.end("about");
}
else if(req.url === "/api")
{
    res.writeHead(200 , {"content-type": "application/plain"});
    res.end(JSON.stringify({
        firstname:"nagaraju",
        lastname:"vengaldasu"
    }));
}
else{
    res.writeHead(404);
    res.end("page not found");
}
});
server.listen(3000,()=>{
    console.log("server is running in port 3000");
})