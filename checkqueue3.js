setImmediate(()=>{
    console.log("seet immediate 1");
})
setImmediate(()=>{
    console.log("set immediate 2");
    process.nextTick(()=>{
        console.log("nexttick");
    })
    Promise.resolve().then(()=>{
        console.log("resolve");
    })
})
setImmediate(()=>{
    console.log("third immediate ");
})