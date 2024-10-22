const http=require("node:http");
const server = http.createServer((req,res) =>{
    const superhero={
        firstname:"nagaraju",
        lastname:"vengaldasu"
    };
    res.writeHead(200,"content-type : application/json");
    res.end(JSON.stringify(superhero));
})
server.listen(3000,()=>{
    console.log("server is running in port 3000");
})
