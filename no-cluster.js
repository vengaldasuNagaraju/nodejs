const http =require("node:http");

const server =http.createServer((req,res) =>{
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("home page");
    }
    else if(req.url === "/slow-page"){
        for(let i=0;i<6000000;i++) {}
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end("slow page");
    }
});
server.listen(8000 , () =>{ console.log(" server is running on port 8000")});