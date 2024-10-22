const http =require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/")
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("home page");
    }
    else if(req.url === "/slow-page")
    {
        let j=0;
        for(let i=0;i<6000000;i++)
        {
            j++;
        }
        res.writeHead(200,{"content-type":"text/plain"});
        res.end(`slowpage ${j}`);
    }
});
server.listen(8000,()=>{
    console.log("server is running on port 8000");
})