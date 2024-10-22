const fs=require("node:fs");

fs.readFile(__filename,()=>{
    console.log("this is readfile 1");
});
process.nextTick(()=>{
    console.log("i am in nexttick 1");
})
Promise.resolve().then(()=>{
    console.log("i am in promise 1");
});
setTimeout(()=>{
    console.log("this is time");
}),(0);