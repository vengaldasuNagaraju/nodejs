const https=require("node:https");
const max=6;
const start=Date.now();
for(let i=0;i<max;i++)
{
    https.request("https://www.google.com" , (res) =>{
        res.on("data", () => {});
        res.on("end" , () => {
            console.log(`Request  :${i+1}`,Date.now() - start);
        })
    })
    .end();
 }
