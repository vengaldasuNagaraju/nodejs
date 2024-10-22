process.nextTick(()=>{
    console.log("process 1");
})
process.nextTick(()=>{
    console.log("process 2");
    process.nextTick(()=>{
        console.log("inside nexttick");
    })
})
process.nextTick(()=>{
    console.log("process 3");
})

Promise.resolve().then(()=>{
    console.log("promise 1");
})
Promise.resolve().then(()=>{
    console.log("promise 2");
    Promise.resolve().then(()=>{
        console.log("inside promise");
    })
})
Promise.resolve().then(()=>{
    console.log("promise 3");
})
setTimeout(() => {
    console.log("settime out 1");
}, 0);
setTimeout(() => {
    console.log("settime out 2");
    process.nextTick(()=>{
        console.log("i am inside settimout executing nexttick ");
    })
}, 0);
setTimeout(() => {
    console.log("settime out 3");
}, 0);