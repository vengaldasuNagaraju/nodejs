const fs=require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close" , ()=>{
    console.log("this is from readablestream close event callback");
});
setImmediate(()=> console.log("setimmediate"));
setTimeout(() => {
    console.log("settimeout");
}, 0);
Promise.resolve().then(()=>{ console.log("this is promise resolver");})
process.nextTick(()=>{ console.log("nexttick batch ");})