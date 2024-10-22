const http=require("node:http");
const fs=require("node:fs");

const server =http.createServer((req,res)=>
    {
        const name="nagaraju";
        res.writeHead(200, { "content-Type" : "text/html"});
        let html=fs.readFileSync("./first.html","utf-8");
        html=html.replace("{{name}}" , name);
        res.end(html);

    });
server.listen(3000,()=>
    {
        console.log("server is running in port 3000");
    });