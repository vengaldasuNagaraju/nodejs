const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((req,res) =>{
  res.writeHead(200,"content-type :text/html");
  //   const html=fs.readFileSync("./first.html","utf-8");
  //   res.end(html);
  fs.createReadStream("./first.html").pipe(res);
})
server.listen(3000,()=>{
    console.log("server is running in port 3000");
})